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
exports.toolService = void 0;
const toolFunctions_1 = require("../../lib/toolFunctions");
const user_model_1 = require("../user/user.model");
const tool_model_1 = require("./tool.model");
const getAllTool = () => __awaiter(void 0, void 0, void 0, function* () {
    const tools = yield tool_model_1.Tool.find({});
    return tools;
});
const postTool = (toolData) => __awaiter(void 0, void 0, void 0, function* () {
    if (!toolData.platform) {
        throw { status: 401, message: "Data are missing" };
    }
    const postData = new tool_model_1.Tool(Object.assign(Object.assign({}, toolData), { organization: toolData.organization.map((d) => (Object.assign(Object.assign({}, d), { unique_id: toolData.platform + d.name }))) }));
    const newTool = yield postData.save();
    // Add tool to user
    if (toolData.organization.length) {
        yield user_model_1.User.bulkWrite((0, toolFunctions_1.toolInsert)(newTool));
    }
    return newTool;
});
const updateTool = (id, toolData) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedToo = yield tool_model_1.Tool.updateOne({ _id: id }, {
        $set: {
            name: toolData.platform,
            website: toolData.website,
            price: toolData.price,
            email: toolData.email,
            password: toolData.password,
            purchase_date: toolData.purchase_date,
            expire_date: toolData.expire_date,
            organization: toolData.organization,
        },
    });
    const removeTool = yield user_model_1.User.bulkWrite((0, toolFunctions_1.toolsRemove)(toolData));
    if (removeTool.modifiedCount > 0) {
        yield user_model_1.User.bulkWrite((0, toolFunctions_1.toolUpdate)(toolData));
    }
    return updatedToo;
});
const deleteSingleTool = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const tool = yield tool_model_1.Tool.findByIdAndDelete(id);
    if (!tool) {
        return null;
    }
    else {
        yield user_model_1.User.bulkWrite((0, toolFunctions_1.deleteTool)(tool));
    }
    return tool;
});
exports.toolService = {
    getAllTool,
    postTool,
    updateTool,
    deleteSingleTool,
};
//# sourceMappingURL=tool.service.js.map