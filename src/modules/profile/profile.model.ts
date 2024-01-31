import mongoose, { Schema, model } from "mongoose";
import { ProfileModel, ProfileType, SingleProfile } from "./profile.type";

const SingleProfile = new mongoose.Schema<any>({
  name: { type: String },
  password: { type: String },
  price: { type: Number },
  users: [{ type: String }],
  purchase_date: {
    type: Date,
  },
  expire_date: {
    type: Date,
  },
  unique_id: {
    type: String,
  },
});

const profileSchema = new mongoose.Schema<ProfileType, ProfileModel>({
  platform: {
    type: String,
  },
  website: {
    type: String,
  },
  profiles: [SingleProfile],
});

export const Profile = model<ProfileType, ProfileModel>(
  "profile",
  profileSchema,
);
