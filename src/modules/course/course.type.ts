import mongoose, { Model } from "mongoose";

export type Course = {
  name: string;
  price: number;
  users: string[];
  purchase_date: Date;
  expire_date: Date;
  id: string;
};

export type CourseType = {
  platform: string;
  website: string;
  email: string;
  password: string;
  course: [Course];
};

export type CourseModel = Model<CourseType, Record<string, unknown>>;
