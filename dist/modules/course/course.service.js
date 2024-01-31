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
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseService = void 0;
const courseFunctions_1 = require("../../lib/courseFunctions");
const user_model_1 = require("../user/user.model");
const course_model_1 = require("./course.model");
const getAllCourse = () => __awaiter(void 0, void 0, void 0, function* () {
    const courses = yield course_model_1.Course.find({});
    return courses;
});
const postCourse = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const postData = new course_model_1.Course(data);
    const course = yield postData.save();
    yield user_model_1.User.bulkWrite((0, courseFunctions_1.courseInsert)(course));
    return { success: true, message: "Data added successfully" };
});
const updateCourse = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield course_model_1.Course.updateOne({ _id: id }, {
        $set: {
            platform: data.platform,
            website: data.website,
            email: data.email,
            password: data.password,
            course: data.course,
        },
    });
    const removeCourse = yield user_model_1.User.bulkWrite((0, courseFunctions_1.courseRemove)(data));
    if (removeCourse.modifiedCount > 0) {
        yield user_model_1.User.bulkWrite((0, courseFunctions_1.courseUpdate)(data));
    }
    return { success: true, message: "Update successful" };
});
const courseDelete = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const course = yield course_model_1.Course.findByIdAndDelete(id);
        if (!course) {
            return null;
        }
        yield user_model_1.User.bulkWrite((0, courseFunctions_1.deleteCourse)(course));
        return course;
    }
    catch (error) {
        throw error;
    }
});
exports.courseService = {
    getAllCourse,
    postCourse,
    updateCourse,
    courseDelete,
};
//# sourceMappingURL=course.service.js.map