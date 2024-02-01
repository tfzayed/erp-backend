"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const calendar_controller_1 = require("./calendar.controller");
const calendarRouter = express_1.default.Router();
calendarRouter
    .route("/")
    .get(calendar_controller_1.calendarController.getAllCalendar)
    .post(calendar_controller_1.calendarController.postCalendar);
calendarRouter
    .route("/:id")
    .patch(calendar_controller_1.calendarController.updateCalendar)
    .delete(calendar_controller_1.calendarController.calendarDelete);
exports.default = calendarRouter;
//# sourceMappingURL=calendar.routes.js.map