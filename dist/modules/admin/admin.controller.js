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
exports.adminController = void 0;
const catchAsync_1 = __importDefault(require("../../lib/catchAsync"));
const sendResponse_1 = require("../../lib/sendResponse");
const admin_service_1 = require("./admin.service");
const getAllAdmin = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const admins = yield admin_service_1.adminService.getAllAdmin();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        result: admins,
        message: "data get successfully",
    });
}));
const postAdmin = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newAdmin = yield admin_service_1.adminService.postAdmin(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        result: newAdmin,
        message: "new admin added successfully",
    });
}));
const updateAdmin = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = req.body;
    const updatedAmin = yield admin_service_1.adminService.updateAdmin(id, data);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        result: updatedAmin,
        message: "admin update successfully",
    });
}));
const deleteAdmin = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const deletedAdmin = yield admin_service_1.adminService.deleteAdmin(id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        result: deletedAdmin,
        message: "admin deleted successfully",
    });
}));
exports.adminController = {
    getAllAdmin,
    postAdmin,
    updateAdmin,
    deleteAdmin,
};
//# sourceMappingURL=admin.controller.js.map