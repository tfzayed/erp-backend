import express from "express";
import { calendarController } from "./calendar.controller";

const calendarRouter = express.Router();

calendarRouter
  .route("/")
  .get(calendarController.getAllCalendar)
  .post(calendarController.postCalendar);

calendarRouter
  .route("/:id")
  .patch(calendarController.updateCalendar)
  .delete(calendarController.calendarDelete);

export default calendarRouter;
