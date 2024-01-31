"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkToken = void 0;
const variables_1 = __importDefault(require("../config/variables"));
const checkToken = (req, res, next) => {
    const { authorization } = req.headers;
    try {
        const token = authorization.split(" ")[1];
        if (token == variables_1.default.token) {
            next();
        }
    }
    catch (error) {
        next("faild fetching");
    }
};
exports.checkToken = checkToken;
//# sourceMappingURL=checkToken.js.map