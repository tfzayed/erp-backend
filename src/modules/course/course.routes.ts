import { checkToken } from "@/middlewares/checkToken";
import express from "express";
import { courseController } from "./course.controller";

const courseRouter = express.Router();

// get course
courseRouter
  .route("/")
  .get(checkToken, courseController.getAllCourse)
  .post(checkToken, courseController.postCourse);

courseRouter
  .route("/:id")
  .patch(checkToken, courseController.updateCourse)
  .delete(checkToken, courseController.courseDelete);

export default courseRouter;
