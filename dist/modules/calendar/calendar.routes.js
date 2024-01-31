"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const checkToken_1 = require("../../middlewares/checkToken");
const express_1 = __importDefault(require("express"));
const calendar_controller_1 = require("./calendar.controller");
const calendarRouter = express_1.default.Router();
calendarRouter
    .route("/")
    .get(checkToken_1.checkToken, calendar_controller_1.calendarController.getAllCalendar)
    .post(checkToken_1.checkToken, calendar_controller_1.calendarController.postCalendar);
calendarRouter
    .route("/:id")
    .patch(checkToken_1.checkToken, calendar_controller_1.calendarController.updateCalendar)
    .delete(checkToken_1.checkToken, calendar_controller_1.calendarController.calendarDelete);
exports.default = calendarRouter;
//# sourceMappingURL=calendar.routes.js.map