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
exports.calendarController = void 0;
const catchAsync_1 = __importDefault(require("../../lib/catchAsync"));
const sendResponse_1 = require("../../lib/sendResponse");
const calendar_service_1 = require("./calendar.service");
const getAllCalendar = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const calendars = yield calendar_service_1.calendarService.getAllCalendar();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        result: calendars,
        message: "data get successfully",
    });
}));
const postCalendar = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const calendarData = yield calendar_service_1.calendarService.postCalendar(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        result: calendarData,
        message: "calendar posted successfully",
    });
}));
const updateCalendar = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updateData = req.body;
    const updatedData = yield calendar_service_1.calendarService.updateCalendar(id, updateData);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        result: updatedData,
        message: "calendar updated successfully",
    });
}));
const calendarDelete = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedCalendar = yield calendar_service_1.calendarService.calendarDelete(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        result: deletedCalendar,
        message: "calendar deleted successfully",
    });
}));
exports.calendarController = {
    getAllCalendar,
    postCalendar,
    updateCalendar,
    calendarDelete,
};
//# sourceMappingURL=calendar.controller.js.map