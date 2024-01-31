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
exports.adminService = void 0;
const admin_model_1 = require("./admin.model");
const getAllAdmin = () => __awaiter(void 0, void 0, void 0, function* () {
    const admins = yield admin_model_1.Admin.find({});
    return admins;
});
const postAdmin = (adminData) => __awaiter(void 0, void 0, void 0, function* () {
    const newAdminData = new admin_model_1.Admin(adminData);
    const newAdmin = newAdminData.save();
    return newAdmin;
});
const updateAdmin = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedAdmin = yield admin_model_1.Admin.findByIdAndUpdate(id, data);
    return updatedAdmin;
});
const deleteAdmin = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedAdmin = yield admin_model_1.Admin.findByIdAndDelete(id);
    return deletedAdmin;
});
exports.adminService = {
    getAllAdmin,
    postAdmin,
    updateAdmin,
    deleteAdmin,
};
//# sourceMappingURL=admin.service.js.map