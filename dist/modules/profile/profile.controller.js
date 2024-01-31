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
exports.profileController = void 0;
const catchAsync_1 = __importDefault(require("../../lib/catchAsync"));
const sendResponse_1 = require("../../lib/sendResponse");
const profile_service_1 = require("./profile.service");
const getAllProfile = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const profiles = yield profile_service_1.profileService.getAllProfile();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        result: profiles,
        message: "data get successfully",
    });
}));
const postProfile = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const profileData = req.body.profile;
    const newProfile = yield profile_service_1.profileService.postProfile(profileData);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        result: newProfile,
        message: "new profile added successfully",
    });
}));
const updateProfile = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const profileData = req.body.profile;
    const updatedProfile = yield profile_service_1.profileService.updateProfile(id, profileData);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        result: updatedProfile,
        message: "profile updated successfully",
    });
}));
const profileDelete = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedProfile = yield profile_service_1.profileService.profileDelete(id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        result: deletedProfile,
        message: "profile updated successfully",
    });
}));
exports.profileController = {
    getAllProfile,
    postProfile,
    updateProfile,
    profileDelete,
};
//# sourceMappingURL=profile.controller.js.map