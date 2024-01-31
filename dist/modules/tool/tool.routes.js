"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const checkToken_1 = require("../../middlewares/checkToken");
const express_1 = __importDefault(require("express"));
const tool_controller_1 = require("./tool.controller");
const toolRouter = express_1.default.Router();
// get course
toolRouter
    .route("/")
    .get(checkToken_1.checkToken, tool_controller_1.toolController.getAllTool)
    .post(checkToken_1.checkToken, tool_controller_1.toolController.postTool);
toolRouter
    .route("/:id")
    .patch(checkToken_1.checkToken, tool_controller_1.toolController.toolUpdate)
    .delete(checkToken_1.checkToken, tool_controller_1.toolController.deleteTool);
exports.default = toolRouter;
//# sourceMappingURL=tool.routes.js.map