import mongoose, { Model } from "mongoose";

export type Bank = {
  bank_name: string;
  branch_name: string;
  acc_name: string;
  acc_number: number;
  routing_number: number;
  id: string;
};

export type Contact = {
  name: string;
  relation: string;
  phone: string;
  id: string;
};

export type Achievements = {
  name: string;
  date: Date;
  id: string;
};

export type UserType = {
  // Personal Information
  name: string;
  email: string;
  dob: Date;
  phone: string;
  gender: string;
  blood_group: string;
  marital_status: string;

  // Identity Information
  user_id?: string;
  nid: number;
  tin: number;

  // Address Information
  present_address: string;
  permanent_address: string;

  // Work Information
  office_id: string;
  team: string;
  role: string;
  department: string;
  designation: string;
  employment_type: string;
  join_date: Date;
  permanent_join: Date;
  resignation_date: Date;
  manager: string;
  achievements: Achievements[];
  archived: boolean;

  // Additional Information
  tools?: string[];
  courses?: string[];
  profiles?: string[];
  assets?: mongoose.Schema.Types.ObjectId[];

  // Miscellaneous
  date?: Date;
  banks: Bank[];
  note: string;

  // Emergency Contacts
  contacts: Contact[];
};

export type UserModel = Model<UserType, Record<string, unknown>>;
