"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import functions
const variables_1 = __importDefault(require("./config/variables"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const dbConnect_1 = require("./dbConnect");
const globalErrorHandler_1 = require("./middlewares/globalErrorHandler");
const routes_1 = __importDefault(require("./routes/routes"));
dotenv_1.default.config();
// main code
const app = (0, express_1.default)();
const port = variables_1.default.port || 5000;
// middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.send("App running");
});
app.use("/api/v1", routes_1.default);
// database connection
(0, dbConnect_1.dbConnect)();
// error handler
app.use(globalErrorHandler_1.globalErrorhandler);
// local server port
app.listen(port, () => {
    console.log(`\x1b[33m  Server is running on port http://localhost:${port}  \x1b[0m`);
});
//# sourceMappingURL=server.js.map