import mongoose, { model } from "mongoose";
import { PayRollModel, PayRollType } from "./payroll.type";

const payrollSchema = new mongoose.Schema<PayRollType, PayRollModel>({
  user_id: { type: String, required: true },
  current_salary: { type: Number },
  updates: [
    {
      reason: { type: String },
      salary: { type: Number },
      date: { type: Date },
    },
  ],
  bonuses: [
    {
      reason: { type: String },
      amount: { type: Number },
      date: { type: Date },
    },
  ],
});

export const PayRoll = model<PayRollType, PayRollModel>(
  "payroll",
  payrollSchema
);
