"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLayoutByType = exports.editLayout = exports.createLayout = void 0;
const catchAsyncErrors_1 = require("../middleware/catchAsyncErrors");
const ErrorHandler_1 = __importDefault(require("../utils/ErrorHandler"));
const layout_model_1 = __importDefault(require("../models/layout.model"));
const cloudinary_1 = __importDefault(require("cloudinary"));
// create Layout
exports.createLayout = (0, catchAsyncErrors_1.CatchAsyncError)(async (req, res, next) => {
    try {
        const { type } = req.body;
        const isTypeExist = await layout_model_1.default.findOne({ type });
        if (isTypeExist) {
            return next(new ErrorHandler_1.default(`${type} already exist`, 400));
        }
        if (type === "Banner") {
            const { image, title, subTitle } = req.body;
            const myCloud = await cloudinary_1.default.v2.uploader.upload(image, {
                folder: "layout",
            });
            const banner = {
                image: {
                    public_id: myCloud.public_id,
                    url: myCloud.secure_url,
                },
                title,
                subTitle,
            };
            await layout_model_1.default.create(banner);
        }
        if (type === "FAQ") {
            const { faq } = req.body;
            const faqItems = await Promise.all(faq.map(async (item) => {
                return {
                    question: item.question,
                    answer: item.answer,
                };
            }));
            await layout_model_1.default.create({ type: "FAQ", faq: faqItems });
        }
        if (type === "Categories") {
            const { categories } = req.body;
            const categoriesItems = await Promise.all(categories.map(async (item) => {
                return {
                    title: item.title,
                };
            }));
            await layout_model_1.default.create({
                type: "Categories",
                categories: categoriesItems,
            });
        }
        res.status(200).json({
            success: true,
            message: "Layout created successFully",
        });
    }
    catch (error) {
        return next(new ErrorHandler_1.default(error.message, 500));
    }
});
// Edit layout
exports.editLayout = (0, catchAsyncErrors_1.CatchAsyncError)(async (req, res, next) => {
    try {
        const { type } = req.body;
        if (type === "Banner") {
            const bannerData = await layout_model_1.default.findOne({ type: "Banner" });
            const { image, title, subTitle } = req.body;
            if (bannerData) {
                await cloudinary_1.default.v2.uploader.destroy(bannerData.image.public_id);
            }
            const myCloud = await cloudinary_1.default.v2.uploader.upload(image, {
                folder: "layout",
            });
            const banner = {
                image: {
                    public_id: myCloud.public_id,
                    url: myCloud.secure_url,
                },
                title,
                subTitle,
            };
            await layout_model_1.default.findByIdAndUpdate(bannerData.id, { banner });
        }
        if (type === "FAQ") {
            const { faq } = req.body;
            const faqItem = await layout_model_1.default.findOne({ type: "FAQ" });
            const faqItems = await Promise.all(faq.map(async (item) => {
                return {
                    question: item.question,
                    answer: item.answer,
                };
            }));
            await layout_model_1.default.findByIdAndUpdate(faqItem?._id, {
                type: "FAQ",
                faq: faqItems,
            });
        }
        if (type === "Categories") {
            const { categories } = req.body;
            const categoriesData = await layout_model_1.default.findOne({
                type: "Categories",
            });
            const categoriesItems = await Promise.all(categories.map(async (item) => {
                return {
                    title: item.title,
                };
            }));
            await layout_model_1.default.findByIdAndUpdate(categoriesData?._id, {
                type: "Categories",
                categories: categoriesItems,
            });
        }
        res.status(200).json({
            success: true,
            message: "Layout Updated successFully",
        });
    }
    catch (error) {
        return next(new ErrorHandler_1.default(error.message, 500));
    }
});
// get layout by type
exports.getLayoutByType = (0, catchAsyncErrors_1.CatchAsyncError)(async (req, res, next) => {
    try {
        const { type } = req.body;
        const layout = await layout_model_1.default.findOne({ type });
        res.status(201).json({
            success: true,
            layout,
        });
    }
    catch (error) {
        return next(new ErrorHandler_1.default(error.message, 500));
    }
});
