import { checkToken } from "@/middlewares/checkToken";
import express from "express";
import { profileController } from "./profile.controller";

const profileRouter = express.Router();

// get course
profileRouter
  .route("/")
  .get(checkToken, profileController.getAllProfile)
  .post(checkToken, profileController.postProfile);

profileRouter
  .route("/:id")
  .patch(checkToken, profileController.updateProfile)
  .delete(checkToken, profileController.profileDelete);

export default profileRouter;
