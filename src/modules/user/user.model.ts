import mongoose, { Schema, model } from "mongoose";
import {
  Achievements,
  Bank,
  Contact,
  Log,
  UserModel,
  UserType,
} from "./user.type";

const BankSchema = new Schema<Bank>({
  bank_name: String,
  branch_name: String,
  acc_name: String,
  acc_number: Number,
  routing_number: Number,
  id: String,
});

const ContactSchema = new Schema<Contact>({
  name: String,
  relation: String,
  phone: String,
  id: String,
});

const AchievementSchema = new Schema<Achievements>({
  name: String,
  date: Date,
  id: String,
});

const LogSchema = new Schema<Log>({
  log: String,
  date: Date,
  id: String,
});

const userSchema = new mongoose.Schema<UserType, UserModel>(
  {
    // Personal Information
    name: { type: String },
    email: { type: String },
    dob: { type: Date },
    phone: { type: String },
    gender: { type: String },
    blood_group: { type: String },
    marital_status: { type: String },

    // Identity Information
    user_id: { type: String },
    nid: { type: Number },
    tin: { type: Number },

    // Address Information
    present_address: { type: String },
    permanent_address: { type: String },

    // Work Information
    office_id: { type: String },
    team: { type: String },
    role: { type: String },
    department: { type: String },
    designation: { type: String },
    employment_type: { type: String },
    join_date: { type: Date },
    permanent_join: { type: Date },
    resignation_date: { type: Date },
    manager: { type: String },
    achievements: [AchievementSchema],
    archived: { type: Boolean, default: false },

    // Additional Information
    tools: { type: [String], ref: "Tool" },
    courses: { type: [String], ref: "Course" },
    profiles: { type: [String], ref: "Profile" },
    assets: { type: [Schema.Types.ObjectId], ref: "Asset" },

    // Miscellaneous
    date: { type: Date, default: Date.now },
    banks: { type: [BankSchema] },
    note: { type: String },

    // Emergency Contacts and Logs
    contacts: { type: [ContactSchema] },
    logs: { type: [LogSchema] },
  },
  {
    timestamps: true,
  }
);

export const User = model<UserType, UserModel>("user", userSchema);
