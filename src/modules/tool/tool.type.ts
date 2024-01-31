import { Model } from "mongoose";

export type ToolType = {
  platform: string;
  website: string;
  price: number;
  email: string;
  password: string;
  purchase_date: Date;
  expire_date: Date;
  organization: {
    name: string;
    unique_id: string;
    users: string[];
  }[];
};

export type ToolModel = Model<ToolType, Record<string, unknown>>;
