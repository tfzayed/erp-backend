import { checkToken } from "@/middlewares/checkToken";
import express from "express";
import { toolController } from "./tool.controller";

const toolRouter = express.Router();

// get course
toolRouter
  .route("/")
  .get(checkToken, toolController.getAllTool)
  .post(checkToken, toolController.postTool);

toolRouter
  .route("/:id")
  .patch(checkToken, toolController.toolUpdate)
  .delete(checkToken, toolController.deleteTool);

export default toolRouter;
