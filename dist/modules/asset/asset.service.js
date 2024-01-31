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
exports.assetService = void 0;
const user_model_1 = require("../user/user.model");
const asset_model_1 = require("./asset.model");
const getAllAsset = () => __awaiter(void 0, void 0, void 0, function* () {
    const assets = yield asset_model_1.Asset.find({});
    return assets;
});
const postAsset = (assetData) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const modifiedData = {
        name: assetData === null || assetData === void 0 ? void 0 : assetData.name,
        price: assetData === null || assetData === void 0 ? void 0 : assetData.price,
        user: assetData === null || assetData === void 0 ? void 0 : assetData.user[0].value,
        purchase_date: assetData === null || assetData === void 0 ? void 0 : assetData.purchase_date,
        logs: assetData === null || assetData === void 0 ? void 0 : assetData.logs,
    };
    const postData = new asset_model_1.Asset(modifiedData);
    const newAsset = yield postData.save();
    const addAssetToUser = yield user_model_1.User.updateOne({ user_id: (_a = assetData === null || assetData === void 0 ? void 0 : assetData.user[0]) === null || _a === void 0 ? void 0 : _a.value }, {
        $push: {
            assets: newAsset._id,
        },
    });
    return newAsset;
});
const updateAsset = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    var _b, _c, _d, _e, _f, _g;
    const updatedAsset = yield user_model_1.User.updateOne({
        assets: id,
    }, {
        $unset: {
            assets: "",
        },
    });
    yield asset_model_1.Asset.updateOne({ _id: id }, {
        $set: {
            name: (_b = updateData === null || updateData === void 0 ? void 0 : updateData.updateAsset) === null || _b === void 0 ? void 0 : _b.name,
            price: (_c = updateData === null || updateData === void 0 ? void 0 : updateData.updateAsset) === null || _c === void 0 ? void 0 : _c.price,
            user: (_d = updateData === null || updateData === void 0 ? void 0 : updateData.updateAsset) === null || _d === void 0 ? void 0 : _d.user[0].value,
            purchase_date: (_e = updateData === null || updateData === void 0 ? void 0 : updateData.updateAsset) === null || _e === void 0 ? void 0 : _e.purchase_date,
            logs: (_f = updateData === null || updateData === void 0 ? void 0 : updateData.updateAsset) === null || _f === void 0 ? void 0 : _f.logs,
        },
    }).clone();
    yield user_model_1.User.updateOne({ user_id: (_g = updateData === null || updateData === void 0 ? void 0 : updateData.updateAsset) === null || _g === void 0 ? void 0 : _g.user.value }, {
        $set: {
            assets: id,
        },
    });
    return updatedAsset;
});
const assetDelete = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedAsset = yield asset_model_1.Asset.findByIdAndDelete(id);
    yield user_model_1.User.updateOne({
        assets: id,
    }, {
        $unset: {
            assets: "",
        },
    });
    return deletedAsset;
});
exports.assetService = {
    getAllAsset,
    postAsset,
    updateAsset,
    assetDelete,
};
//# sourceMappingURL=asset.service.js.map