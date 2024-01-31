import { Model } from "mongoose";

export type CalendarType = {
  year: number;
  holidays: {
    id: string;
    start_date: Date;
    end_date: Date;
    day_count: number;
    reason: string;
  }[];
  events: {
    id: string;
    start_date: Date;
    end_date: Date;
    day_count: number;
    reason: string;
  }[];
};

export type CalendarModel = Model<CalendarType, Record<string, unknown>>;
