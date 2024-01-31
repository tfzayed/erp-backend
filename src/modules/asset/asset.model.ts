import mongoose, { model } from "mongoose";
import { AssetModel, AssetType } from "./asset.type";

const assetSchema = new mongoose.Schema<AssetType, AssetModel>({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  user: [{ type: String }],
  purchase_date: {
    type: Date,
  },
  logs: {
    type: [
      {
        log: {
          type: String,
        },
        date: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
  },
});

export const Asset = model<AssetType, AssetModel>("asset", assetSchema);
