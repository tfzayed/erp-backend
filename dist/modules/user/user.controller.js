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
exports.userController = void 0;
const catchAsync_1 = __importDefault(require("../../lib/catchAsync"));
const sendResponse_1 = require("../../lib/sendResponse");
const user_service_1 = require("./user.service");
const getAllUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.query;
    const users = yield user_service_1.userService.getAllUser(email);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        result: users,
        message: "data get successfully",
    });
}));
const postUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield user_service_1.userService.postUser(req === null || req === void 0 ? void 0 : req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        result: newUser,
        message: "new user added successfully",
    });
}));
const updateUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const userData = {
        name: req === null || req === void 0 ? void 0 : req.body.name,
        email: req === null || req === void 0 ? void 0 : req.body.email,
        dob: req === null || req === void 0 ? void 0 : req.body.dob,
        phone: req === null || req === void 0 ? void 0 : req.body.phone,
        gender: req === null || req === void 0 ? void 0 : req.body.gender,
        blood_group: req === null || req === void 0 ? void 0 : req.body.blood_group,
        marital_status: req === null || req === void 0 ? void 0 : req.body.marital_status,
        nid: req === null || req === void 0 ? void 0 : req.body.nid,
        tin: req === null || req === void 0 ? void 0 : req.body.tin,
        present_address: req === null || req === void 0 ? void 0 : req.body.present_address,
        permanent_address: req === null || req === void 0 ? void 0 : req.body.permanent_address,
        office_id: req === null || req === void 0 ? void 0 : req.body.office_id,
        team: req === null || req === void 0 ? void 0 : req.body.team,
        role: req === null || req === void 0 ? void 0 : req.body.role,
        department: req === null || req === void 0 ? void 0 : req.body.department,
        designation: req === null || req === void 0 ? void 0 : req.body.designation,
        employment_type: req === null || req === void 0 ? void 0 : req.body.employment_type,
        join_date: req === null || req === void 0 ? void 0 : req.body.join_date,
        permanent_join: req === null || req === void 0 ? void 0 : req.body.permanent_join,
        resignation_date: req === null || req === void 0 ? void 0 : req.body.resignation_date,
        manager: req === null || req === void 0 ? void 0 : req.body.manager,
        achievements: req === null || req === void 0 ? void 0 : req.body.achievements,
        archived: req === null || req === void 0 ? void 0 : req.body.archived,
        date: req === null || req === void 0 ? void 0 : req.body.date,
        banks: req === null || req === void 0 ? void 0 : req.body.banks,
        note: req === null || req === void 0 ? void 0 : req.body.note,
        contacts: req === null || req === void 0 ? void 0 : req.body.contacts,
    };
    const updatedUser = yield user_service_1.userService.updateUser(id, userData);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        result: updatedUser,
        message: "user updated successfully",
    });
}));
const deleteUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedUser = yield user_service_1.userService.deleteUser(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        result: deletedUser,
        message: "user deleted successfully",
    });
}));
exports.userController = {
    getAllUser,
    postUser,
    updateUser,
    deleteUser,
};
//# sourceMappingURL=user.controller.js.map