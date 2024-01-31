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
exports.assetController = void 0;
const catchAsync_1 = __importDefault(require("../../lib/catchAsync"));
const sendResponse_1 = require("../../lib/sendResponse");
const asset_service_1 = require("./asset.service");
const getAllAsset = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const assets = yield asset_service_1.assetService.getAllAsset();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        result: assets,
        message: "data get successfully",
    });
}));
const postAsset = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const assetData = yield asset_service_1.assetService.postAsset(req.body.asset);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        result: assetData,
        message: "asset posted successfully",
    });
}));
const updateAsset = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updateData = req.body;
    const updatedData = yield asset_service_1.assetService.updateAsset(id, updateData);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        result: updatedData,
        message: "asset updated successfully",
    });
}));
const assetDelete = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedAsset = yield asset_service_1.assetService.assetDelete(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        result: deletedAsset,
        message: "asset deleted successfully",
    });
}));
exports.assetController = {
    getAllAsset,
    postAsset,
    updateAsset,
    assetDelete,
};
//# sourceMappingURL=asset.controller.js.map