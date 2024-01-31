"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), ".env") });
exports.default = {
    env: process.env.NODE_ENV,
    database_uri: process.env.MONGO_URI,
    port: process.env.PORT,
    token: process.env.TOKEN,
    salt: Number(process.env.SALT),
    secret: process.env.SECRET,
    jwt_secret: process.env.JWT_SECRET,
    jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
    jwt_expire: process.env.JWT_TOKEN_EXPIRE,
    jwt_refresh_expire: process.env.JWT_REFRESH_TOKEN_EXPIRE,
};
//# sourceMappingURL=variables.js.map