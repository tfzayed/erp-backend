"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const checkToken_1 = require("../../middlewares/checkToken");
const express_1 = __importDefault(require("express"));
const profile_controller_1 = require("./profile.controller");
const profileRouter = express_1.default.Router();
// get course
profileRouter
    .route("/")
    .get(checkToken_1.checkToken, profile_controller_1.profileController.getAllProfile)
    .post(checkToken_1.checkToken, profile_controller_1.profileController.postProfile);
profileRouter
    .route("/:id")
    .patch(checkToken_1.checkToken, profile_controller_1.profileController.updateProfile)
    .delete(checkToken_1.checkToken, profile_controller_1.profileController.profileDelete);
exports.default = profileRouter;
//# sourceMappingURL=profile.routes.js.map