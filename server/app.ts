require("dotenv").config();
import express, { Request, Response, NextFunction } from "express";
export const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import { ErrorMiddleware } from "./middleware/error";
import userRouter from "./routes/user.route";
import courseRouter from "./routes/course.route";
import orderRouter from "./routes/order.route";
import notificationRoute from "./routes/notification.route";
import analyticsRouter from "./routes/analytics.route";
import LayoutRouter from "./routes/layout.route";
import { rateLimit } from "express-rate-limit";
// body parser
app.use(express.json({ limit: "50mb" })); // limit

// cookie parser
app.use(cookieParser());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100,
  standardHeaders: "draft-7",
  legacyHeaders: false,
});
// cors => cross origin resource sharing

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

// router
app.use(
  "/api/v1",
  userRouter,
  orderRouter,
  courseRouter,
  notificationRoute,
  analyticsRouter,
  LayoutRouter
);

// testing api
app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: "API is working",
  });
});

// unknown route
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not found`) as any;
  err.statusCode = 404;
  next(err);
});
//middleware calls
app.use(limiter);
app.use(ErrorMiddleware);
