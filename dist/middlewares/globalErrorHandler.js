"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorhandler = void 0;
const variables_1 = __importDefault(require("../config/variables"));
const ApiError_1 = __importDefault(require("../errors/ApiError"));
const handleValidationError_1 = require("../errors/handleValidationError");
const globalErrorhandler = (error, req, res, next) => {
    console.log(error, "error");
    let statuscode = 500;
    let message = "something went wrong";
    let errormessage = [];
    // config.env !== "production"
    //   ? console.log(error)
    //   : logger.errorlog.error(error);
    if (error.name === "ValidationError") {
        const siplifiedErrors = (0, handleValidationError_1.handleValidationErrors)(error);
        statuscode = siplifiedErrors.statusCode;
        errormessage = siplifiedErrors.errormessage;
        message = siplifiedErrors.message;
    }
    else if (error instanceof ApiError_1.default) {
        console.log(error);
        statuscode = error === null || error === void 0 ? void 0 : error.statusCode;
        message = error.message;
        errormessage = (error === null || error === void 0 ? void 0 : error.message)
            ? [
                {
                    path: "",
                    message: error === null || error === void 0 ? void 0 : error.message,
                },
            ]
            : [];
    }
    else if (error instanceof Error) {
        message = error.message;
        errormessage = (error === null || error === void 0 ? void 0 : error.message)
            ? [
                {
                    path: "",
                    message: error === null || error === void 0 ? void 0 : error.message,
                },
            ]
            : [];
    }
    res.status(statuscode).json({
        success: false,
        message,
        errormessage,
        stack: variables_1.default.env !== "production" ? error.stack : undefined,
    });
    next();
};
exports.globalErrorhandler = globalErrorhandler;
//# sourceMappingURL=globalErrorHandler.js.map