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
exports.userService = void 0;
const asset_model_1 = require("../asset/asset.model");
const course_model_1 = require("../course/course.model");
const tool_model_1 = require("../tool/tool.model");
const user_model_1 = require("./user.model");
const getAllUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    let users;
    const user = yield user_model_1.User.find({ email: email });
    if (((_a = user[0]) === null || _a === void 0 ? void 0 : _a.role) === "admin") {
        users = yield user_model_1.User.find({});
    }
    else {
        users = yield user_model_1.User.find({ email: email });
    }
    return users;
});
const postUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const newUserData = new user_model_1.User(payload);
    const newUser = newUserData.save();
    return newUser;
});
const updateUser = (id, userData) => __awaiter(void 0, void 0, void 0, function* () {
    const updateUser = yield user_model_1.User.updateOne({ _id: id }, { $set: userData });
    return updateUser;
});
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedUser = yield user_model_1.User.findByIdAndDelete(id);
    if (!deletedUser) {
        return { success: false, message: "User not found" };
    }
    // Delete user from tools
    yield tool_model_1.Tool.updateMany({ "organization.unique_id": { $in: deletedUser.tools } }, { $pull: { "organization.$[elm].user": id } }, { arrayFilters: [{ "elm.unique_id": { $in: deletedUser.tools } }] });
    // Delete user from courses
    yield course_model_1.Course.updateMany({ "course.unique_id": { $in: deletedUser.courses } }, { $pull: { "course.$[elm].user": id } }, { arrayFilters: [{ "elm.unique_id": { $in: deletedUser.courses } }] });
    // Delete user from asset
    yield asset_model_1.Asset.updateOne({
        user: id,
    }, {
        $unset: {
            user: "",
        },
    });
    return deletedUser;
});
exports.userService = {
    getAllUser,
    postUser,
    updateUser,
    deleteUser,
};
//# sourceMappingURL=user.service.js.map