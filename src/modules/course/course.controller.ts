import catchAsync from "@/lib/catchAsync";
import { sendResponse } from "@/lib/sendResponse";
import { Request, Response } from "express";
import { courseService } from "./course.service";

const getAllCourse = catchAsync(async (req: Request, res: Response) => {
  const courses = await courseService.getAllCourse();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    result: courses,
    message: "data get successfully",
  });
});

const postCourse = catchAsync(async (req: Request, res: Response) => {
  const courseData = req.body.course;

  if (!courseData.email || !courseData.password) {
    return res.status(401).send({
      success: false,
      error: "Data is missing",
    });
  }

  const newCourse = await courseService.postCourse(courseData);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    result: newCourse,
    message: "data get successfully",
  });
});

const updateCourse = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body.course;

  const updatedCourse = await courseService.updateCourse(id, data);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    result: updatedCourse,
    message: "course update successfully",
  });
});

const courseDelete = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedCourse = await courseService.courseDelete(id);

    if (!deletedCourse) {
      return res.status(404).send();
    }

    res.send(deletedCourse);
  } catch (error) {
    console.error("Error deleting course:", error);
    res.status(500).send(error);
  }
});

export const courseController = {
  getAllCourse,
  postCourse,
  updateCourse,
  courseDelete,
};
