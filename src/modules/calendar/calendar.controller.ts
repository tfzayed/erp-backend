import catchAsync from "@/lib/catchAsync";
import { sendResponse } from "@/lib/sendResponse";
import { Request, Response } from "express";
import { calendarService } from "./calendar.service";

const getAllCalendar = catchAsync(async (req: Request, res: Response) => {
  const calendars = await calendarService.getAllCalendar();

  sendResponse(res, {
    success: true,
    statusCode: 200,
    result: calendars,
    message: "data get successfully",
  });
});

const postCalendar = catchAsync(async (req: Request, res: Response) => {
  const calendarData = await calendarService.postCalendar(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    result: calendarData,
    message: "calendar posted successfully",
  });
});

const updateCalendar = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updateData = req.body;

  const updatedData = await calendarService.updateCalendar(id, updateData);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    result: updatedData,
    message: "calendar updated successfully",
  });
});

const calendarDelete = catchAsync(async (req: Request, res: Response) => {
  const deletedCalendar = await calendarService.calendarDelete(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    result: deletedCalendar,
    message: "calendar deleted successfully",
  });
});

export const calendarController = {
  getAllCalendar,
  postCalendar,
  updateCalendar,
  calendarDelete,
};
