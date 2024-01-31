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
exports.profileService = void 0;
const profileFunctions_1 = require("../../lib/profileFunctions");
const user_model_1 = require("../user/user.model");
const profile_model_1 = require("./profile.model");
const getAllProfile = () => __awaiter(void 0, void 0, void 0, function* () {
    const profiles = yield profile_model_1.Profile.find({}).populate("profiles");
    return profiles;
});
const postProfile = (profileData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!profileData.platform || !profileData.website) {
            return { success: false, error: "Data is missing" };
        }
        const postData = new profile_model_1.Profile(Object.assign(Object.assign({}, profileData), { profiles: profileData.profiles.map((data) => {
                return Object.assign(Object.assign({}, data), { unique_id: profileData.platform + data.name });
            }) }));
        const profile = yield postData.save();
        yield user_model_1.User.bulkWrite((0, profileFunctions_1.profileInsert)(profile));
        return { success: true, message: "Data added successfully" };
    }
    catch (error) {
        console.error("Error creating profile:", error);
        throw { status: 500, message: "Internal Server Error" };
    }
});
const updateProfile = (id, profileData) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedProfile = yield profile_model_1.Profile.updateOne({ _id: id }, {
        $set: {
            platform: profileData.platform,
            website: profileData.website,
            profiles: profileData.profiles,
        },
    }).clone();
    const removeProfile = yield user_model_1.User.bulkWrite((0, profileFunctions_1.profileRemove)(profileData));
    if (removeProfile.modifiedCount > 0) {
        yield user_model_1.User.bulkWrite((0, profileFunctions_1.profileUpdate)(profileData));
    }
    return updatedProfile;
});
const profileDelete = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedProfile = yield profile_model_1.Profile.findByIdAndDelete(id);
        if (!deletedProfile) {
            return null;
        }
        yield user_model_1.User.bulkWrite((0, profileFunctions_1.deleteProfile)(deletedProfile));
        return deletedProfile;
    }
    catch (error) {
        throw error;
    }
});
exports.profileService = {
    getAllProfile,
    postProfile,
    updateProfile,
    profileDelete,
};
//# sourceMappingURL=profile.service.js.map