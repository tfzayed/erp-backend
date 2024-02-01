import express from "express";
import { courseController } from "./course.controller";

const courseRouter = express.Router();

// get course
courseRouter
  .route("/")
  .get(courseController.getAllCourse)
  .post(courseController.postCourse);

courseRouter
  .route("/:id")
  .patch(courseController.updateCourse)
  .delete(courseController.courseDelete);

export default courseRouter;
