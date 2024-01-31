import { Log } from "@/types";
import { Model } from "mongoose";

export type AssetType = {
  name: string;
  price: number;
  user: string[];

  purchase_date: Date;
  logs: Log[];
};

export type AssetModel = Model<AssetType, Record<string, unknown>>;
