import { checkToken } from "@/middlewares/checkToken";
import express from "express";
import { userController } from "./user.controller";

const userRouter = express.Router();

// get user
userRouter
  .route("/")
  .get(checkToken, userController.getAllUser)
  .post(checkToken, userController.postUser);

userRouter
  .route("/:id")
  .patch(checkToken, userController.updateUser)
  .delete(checkToken, userController.deleteUser);

export default userRouter;
