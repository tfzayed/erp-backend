"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const checkToken_1 = require("../../middlewares/checkToken");
const express_1 = __importDefault(require("express"));
const admin_controller_1 = require("./admin.controller");
const adminRouter = express_1.default.Router();
// get admin
adminRouter
    .route("/")
    .get(checkToken_1.checkToken, admin_controller_1.adminController.getAllAdmin)
    .post(checkToken_1.checkToken, admin_controller_1.adminController.postAdmin);
adminRouter
    .route("/:id")
    .patch(checkToken_1.checkToken, admin_controller_1.adminController.updateAdmin)
    .delete(checkToken_1.checkToken, admin_controller_1.adminController.deleteAdmin);
exports.default = adminRouter;
//# sourceMappingURL=admin.routes.js.map