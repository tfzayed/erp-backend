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
exports.toolController = void 0;
const catchAsync_1 = __importDefault(require("../../lib/catchAsync"));
const sendResponse_1 = require("../../lib/sendResponse");
const tool_service_1 = require("./tool.service");
const getAllTool = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tools = yield tool_service_1.toolService.getAllTool();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        result: tools,
        message: "data get successfully",
    });
}));
const postTool = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newTools = yield tool_service_1.toolService.postTool(req.body.tool);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        result: newTools,
        message: "new tool added successfully",
    });
}));
const toolUpdate = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const toolData = req.body.tool;
    const updatedTool = yield tool_service_1.toolService.updateTool(id, toolData);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        result: updatedTool,
        message: "tool updated successfully",
    });
}));
const deleteTool = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const tool = yield tool_service_1.toolService.deleteSingleTool(id);
    if (!tool) {
        return res.status(404).send();
    }
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        result: tool,
        message: "tool updated successfully",
    });
}));
exports.toolController = {
    getAllTool,
    postTool,
    toolUpdate,
    deleteTool,
};
//# sourceMappingURL=tool.controller.js.map