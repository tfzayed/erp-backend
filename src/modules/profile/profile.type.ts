import { Model } from "mongoose";

export type SingleProfile = {
  name: string;
  password: string;
  price: number;
  users: string[];
  purchase_date: Date;
  expire_date: Date;
  unique_id: string;
};

export type ProfileType = {
  platform: string;
  website: string;
  profiles: [SingleProfile];
};

export type ProfileModel = Model<ProfileType, Record<string, unknown>>;
