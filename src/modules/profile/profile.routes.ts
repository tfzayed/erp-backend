import express from "express";
import { profileController } from "./profile.controller";

const profileRouter = express.Router();

// get course
profileRouter
  .route("/")
  .get(profileController.getAllProfile)
  .post(profileController.postProfile);

profileRouter
  .route("/:id")
  .patch(profileController.updateProfile)
  .delete(profileController.profileDelete);

export default profileRouter;
