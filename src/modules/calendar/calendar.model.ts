import mongoose, { model } from "mongoose";
import { CalendarModel, CalendarType } from "./calendar.type";

const calendarSchema = new mongoose.Schema<CalendarType, CalendarModel>({
  year: { type: Number },
  holidays: [
    {
      id: { type: String },
      start_date: { type: Date },
      end_date: { type: Date },
      day_count: { type: Number },
      reason: { type: String },
    },
  ],
  events: [
    {
      id: { type: String },
      start_date: { type: Date },
      end_date: { type: Date },
      day_count: { type: Number },
      reason: { type: String },
    },
  ],
});

export const Calendar = model<CalendarType, CalendarModel>(
  "Calendar",
  calendarSchema
);
