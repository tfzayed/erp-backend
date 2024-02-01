import express from "express";
import { toolController } from "./tool.controller";

const toolRouter = express.Router();

// get course
toolRouter
  .route("/")
  .get(toolController.getAllTool)
  .post(toolController.postTool);

toolRouter
  .route("/:id")
  .patch(toolController.toolUpdate)
  .delete(toolController.deleteTool);

export default toolRouter;
