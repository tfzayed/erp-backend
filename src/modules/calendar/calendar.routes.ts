import { checkToken } from "@/middlewares/checkToken";
import express from "express";
import { calendarController } from "./calendar.controller";

const calendarRouter = express.Router();

calendarRouter
  .route("/")
  .get(checkToken, calendarController.getAllCalendar)
  .post(checkToken, calendarController.postCalendar);

calendarRouter
  .route("/:id")
  .patch(checkToken, calendarController.updateCalendar)
  .delete(checkToken, calendarController.calendarDelete);

export default calendarRouter;
