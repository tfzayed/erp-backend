import {
  courseInsert,
  courseRemove,
  courseUpdate,
  deleteCourse,
} from "@/lib/courseFunctions";
import { User } from "../user/user.model";
import { Course } from "./course.model";
import { CourseType } from "./course.type";

const getAllCourse = async (): Promise<CourseType[]> => {
  const courses = await Course.find({});
  return courses;
};

const postCourse = async (data: CourseType) => {
  const postData = new Course(data);

  const course = await postData.save();

  await User.bulkWrite(courseInsert(course));

  return { success: true, message: "Data added successfully" };
};

const updateCourse = async (id: string, data: CourseType) => {
  await Course.updateOne(
    { _id: id },
    {
      $set: {
        platform: data.platform,
        website: data.website,
        email: data.email,
        password: data.password,
        course: data.course,
      },
    }
  );

  const removeCourse = await User.bulkWrite(courseRemove(data));

  if (removeCourse.modifiedCount > 0) {
    await User.bulkWrite(courseUpdate(data));
  }

  return { success: true, message: "Update successful" };
};

const courseDelete = async (id: string) => {
  try {
    const course = await Course.findByIdAndDelete(id);

    if (!course) {
      return null;
    }

    await User.bulkWrite(deleteCourse(course));

    return course;
  } catch (error) {
    throw error;
  }
};

export const courseService = {
  getAllCourse,
  postCourse,
  updateCourse,
  courseDelete,
};
