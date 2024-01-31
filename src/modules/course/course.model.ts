import mongoose, { model } from "mongoose";
import { CourseModel, CourseType } from "./course.type";

const SingleCourse = new mongoose.Schema({
  name: { type: String },
  price: { type: Number },
  users: [{ type: String }],
  purchase_date: {
    type: Date,
  },
  expire_date: {
    type: Date,
  },
  id: {
    type: String,
  },
});

const courseSchema = new mongoose.Schema<CourseType, CourseModel>({
  platform: {
    type: String,
  },
  website: {
    type: String,
  },
  email: { type: String },
  password: { type: String },
  course: [SingleCourse],
});

export const Course = model<CourseType, CourseModel>("course", courseSchema);
