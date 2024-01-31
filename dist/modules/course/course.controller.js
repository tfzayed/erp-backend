"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseController = void 0;
const catchAsync_1 = __importDefault(require("../../lib/catchAsync"));
const sendResponse_1 = require("../../lib/sendResponse");
const course_service_1 = require("./course.service");
const getAllCourse = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const courses = yield course_service_1.courseService.getAllCourse();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        result: courses,
        message: "data get successfully",
    });
}));
const postCourse = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const courseData = req.body.course;
    if (!courseData.email || !courseData.password) {
        return res.status(401).send({
            success: false,
            error: "Data is missing",
        });
    }
    const newCourse = yield course_service_1.courseService.postCourse(courseData);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        result: newCourse,
        message: "data get successfully",
    });
}));
const updateCourse = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = req.body.course;
    const updatedCourse = yield course_service_1.courseService.updateCourse(id, data);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        result: updatedCourse,
        message: "course update successfully",
    });
}));
const courseDelete = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const deletedCourse = yield course_service_1.courseService.courseDelete(id);
        if (!deletedCourse) {
            return res.status(404).send();
        }
        res.send(deletedCourse);
    }
    catch (error) {
        console.error("Error deleting course:", error);
        res.status(500).send(error);
    }
}));
exports.courseController = {
    getAllCourse,
    postCourse,
    updateCourse,
    courseDelete,
};
//# sourceMappingURL=course.controller.js.map