"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const checkToken_1 = require("../../middlewares/checkToken");
const express_1 = __importDefault(require("express"));
const course_controller_1 = require("./course.controller");
const courseRouter = express_1.default.Router();
// get course
courseRouter
    .route("/")
    .get(checkToken_1.checkToken, course_controller_1.courseController.getAllCourse)
    .post(checkToken_1.checkToken, course_controller_1.courseController.postCourse);
courseRouter
    .route("/:id")
    .patch(checkToken_1.checkToken, course_controller_1.courseController.updateCourse)
    .delete(checkToken_1.checkToken, course_controller_1.courseController.courseDelete);
exports.default = courseRouter;
//# sourceMappingURL=course.routes.js.map