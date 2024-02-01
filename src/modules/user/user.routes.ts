import express from "express";
import { userController } from "./user.controller";

const userRouter = express.Router();

// get user
userRouter
  .route("/")
  .get(userController.getAllUser)
  .post(userController.postUser);

userRouter
  .route("/:id")
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

export default userRouter;
