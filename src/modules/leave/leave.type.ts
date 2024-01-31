import { Model } from "mongoose";

export type Requests = {
  type: string;
  start_date: Date;
  end_date: Date;
  day_count: number;
  reason: string;
  status: string;
  submit_date: Date;
  response_date: Date;
};

export type Year = {
  year: number;
  casual: number;
  earned: number;
  sick: number;
  without_pay: number;
  requests: Requests[];
};

export type LeaveType = {
  user_id: string;
  years: Year[];
};

export type LeaveModel = Model<LeaveType, Record<string, unknown>>;
