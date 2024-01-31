"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const checkToken_1 = require("../../middlewares/checkToken");
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const userRouter = express_1.default.Router();
// get user
userRouter
    .route("/")
    .get(checkToken_1.checkToken, user_controller_1.userController.getAllUser)
    .post(checkToken_1.checkToken, user_controller_1.userController.postUser);
userRouter
    .route("/:id")
    .patch(checkToken_1.checkToken, user_controller_1.userController.updateUser)
    .delete(checkToken_1.checkToken, user_controller_1.userController.deleteUser);
exports.default = userRouter;
//# sourceMappingURL=user.routes.js.map