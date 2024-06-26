import { Request, Response, NextFunction } from "express";
import { CatchAsyncError } from "./catchAsyncErrors";
import ErrorHandler from "../utils/ErrorHandler";
import jwt, { JwtPayload } from "jsonwebtoken";
import { redis } from "../utils/redis";
import { updateAccessToken } from "../controllers/user.controller";
// authentication user
export const isAuthenticated = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const access_token = req.cookies.access_token;

    if (!access_token) {
      return next(
        new ErrorHandler("Please login to access this resource", 400)
      );
    }
    const decoded = jwt.decode(access_token) as JwtPayload;
    if (!decoded) {
      return next(new ErrorHandler("access token is not valid", 400));
    }
    // check if the access token is expired
    if (decoded.exp && decoded.exp <= Date.now() / 1000) {
      try {
        await updateAccessToken(req, res, next);
      } catch (error) {
        return next(error);
      }
    } else {
      const user = await redis.get(decoded.id);

      if (!user) {
        return next(
          new ErrorHandler("Please login to access this resource", 400)
        );
      }

      req.user = JSON.parse(user);
      next();
    }
  }
);

interface user {
  // Define the structure of your User type here
  role: string;
}

//validate user role
export const authorizeRoles = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as user; // Assert req.user as User type
    if (!roles.includes(user.role)) {
      return next(
        new ErrorHandler(
          `Role: ${user.role} is not allowed to access this resource`,
          403
        )
      );
    }

    next();
  };
};
