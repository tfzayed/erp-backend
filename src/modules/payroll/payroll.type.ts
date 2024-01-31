import { Model } from "mongoose";

export type PayRollType = {
  user_id: string;
  current_salary: number;
  updates: { reason: string; salary: number; date: Date }[];
  bonuses: { reason: string; amount: number; date: Date }[];
};

export type PayRollModel = Model<PayRollType, Record<string, unknown>>;
