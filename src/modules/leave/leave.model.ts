import mongoose, { model } from "mongoose";
import { LeaveModel, LeaveType } from "./leave.type";

const requestSchema = new mongoose.Schema({
  type: { type: String },
  start_date: { type: Date },
  end_date: { type: Date },
  day_count: { type: Number },
  reason: { type: String },
  status: { type: String },
  submit_date: { type: Date },
  response_date: { type: Date },
});

const yearSchema = new mongoose.Schema({
  year: { type: Number },
  casual: { type: Number },
  earned: { type: Number },
  sick: { type: Number },
  without_pay: { type: Number },
  requests: [requestSchema],
});

const leaveScheme = new mongoose.Schema<LeaveType, LeaveModel>({
  user_id: {
    type: String,
    required: true,
  },
  years: [yearSchema],
});

export const Leave = model<LeaveType, LeaveModel>("leave", leaveScheme);
