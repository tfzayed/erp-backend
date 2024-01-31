"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
const variables_1 = __importDefault(require("./config/variables"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const MONGO_URI = variables_1.default.database_uri;
if (!MONGO_URI) {
    throw new Error("Please define the MONGO_URI environment variable inside .env");
}
mongoose_1.default.set("strictQuery", false);
const dbConnect = () => {
    mongoose_1.default
        .connect(variables_1.default.database_uri)
        .then(() => console.log("\x1b[32m  Connection successful \x1b[0m"))
        .catch((err) => console.error(err));
};
exports.dbConnect = dbConnect;
//# sourceMappingURL=dbConnect.js.map