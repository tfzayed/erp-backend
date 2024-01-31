import mongoose, { model } from "mongoose";
import { ToolModel, ToolType } from "./tool.type";

const toolSchema = new mongoose.Schema<ToolType, ToolModel>({
  platform: { type: String },
  website: { type: String },
  price: { type: Number },
  email: { type: String },
  password: { type: String },
  purchase_date: {
    type: Date,
  },
  expire_date: {
    type: Date,
  },
  organization: [
    {
      name: { type: String },
      unique_id: { type: String },
      users: [{ type: String }],
    },
  ],
});

export const Tool = model<ToolType, ToolModel>("tool", toolSchema);
