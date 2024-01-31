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
const variables_1 = __importDefault(require("../config/variables"));
const ApiError_1 = __importDefault(require("../errors/ApiError"));
const jwtTokenHelper_1 = require("../lib/jwtTokenHelper");
const user_model_1 = require("../modules/user/user.model");
const auth = (...requestRoles) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.headers.authorization;
        const verifyToken = `${token.split(" ")[1]}`;
        const verfiedToken = jwtTokenHelper_1.jwtHelpers.verifyToken(verifyToken, variables_1.default.jwt_secret);
        const isUser = yield user_model_1.User.findOne({ id: verfiedToken.id });
        if (!isUser) {
            throw new ApiError_1.default("User not found", 401, "");
        }
        next();
    }
    catch (error) {
        next(error);
    }
});
exports.default = auth;
//# sourceMappingURL=auth.js.map