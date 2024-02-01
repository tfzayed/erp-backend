"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const asset_controller_1 = require("./asset.controller");
const assetRouter = express_1.default.Router();
// get assets
assetRouter
    .route("/")
    .get(asset_controller_1.assetController.getAllAsset)
    .post(asset_controller_1.assetController.postAsset);
assetRouter
    .route("/:id")
    .patch(asset_controller_1.assetController.updateAsset)
    .delete(asset_controller_1.assetController.assetDelete);
exports.default = assetRouter;
//# sourceMappingURL=asset.routes.js.map