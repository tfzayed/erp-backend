"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const userRouter = express_1.default.Router();
// get user
userRouter
    .route("/")
    .get(user_controller_1.userController.getAllUser)
    .post(user_controller_1.userController.postUser);
userRouter
    .route("/:id")
    .patch(user_controller_1.userController.updateUser)
    .delete(user_controller_1.userController.deleteUser);
exports.default = userRouter;
//# sourceMappingURL=user.routes.js.map