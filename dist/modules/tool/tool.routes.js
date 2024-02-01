"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tool_controller_1 = require("./tool.controller");
const toolRouter = express_1.default.Router();
// get course
toolRouter
    .route("/")
    .get(tool_controller_1.toolController.getAllTool)
    .post(tool_controller_1.toolController.postTool);
toolRouter
    .route("/:id")
    .patch(tool_controller_1.toolController.toolUpdate)
    .delete(tool_controller_1.toolController.deleteTool);
exports.default = toolRouter;
//# sourceMappingURL=tool.routes.js.map