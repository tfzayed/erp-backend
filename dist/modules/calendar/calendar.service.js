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
exports.calendarService = void 0;
const calendar_model_1 = require("./calendar.model");
const getAllCalendar = () => __awaiter(void 0, void 0, void 0, function* () {
    const calendars = yield calendar_model_1.Calendar.find({});
    return calendars;
});
const postCalendar = (calendarData) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const existingCal = yield calendar_model_1.Calendar.find({
        year: calendarData.year,
    });
    if (!((_a = existingCal[0]) === null || _a === void 0 ? void 0 : _a.id)) {
        const postCalendar = new calendar_model_1.Calendar(calendarData);
        const newCalendar = yield postCalendar.save();
        return newCalendar;
    }
});
const updateCalendar = (id, update) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedCalendar = yield calendar_model_1.Calendar.updateOne({
        _id: id,
    }, {
        $unset: {
            year: "",
            holidays: "",
            events: "",
        },
    });
    yield calendar_model_1.Calendar.updateOne({ _id: id }, {
        $set: {
            year: update === null || update === void 0 ? void 0 : update.year,
            holidays: update === null || update === void 0 ? void 0 : update.holidays,
            events: update === null || update === void 0 ? void 0 : update.events,
        },
    }).clone();
    return updatedCalendar;
});
const calendarDelete = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedCalendar = yield calendar_model_1.Calendar.findByIdAndDelete(id);
    return deletedCalendar;
});
exports.calendarService = {
    getAllCalendar,
    postCalendar,
    updateCalendar,
    calendarDelete,
};
//# sourceMappingURL=calendar.service.js.map