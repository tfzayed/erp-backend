import catchAsync from "@/lib/catchAsync";
import { sendResponse } from "@/lib/sendResponse";
import { Request, Response } from "express";
import { toolService } from "./tool.service";

const getAllTool = catchAsync(async (req: Request, res: Response) => {
  const tools = await toolService.getAllTool();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    result: tools,
    message: "data get successfully",
  });
});

const postTool = catchAsync(async (req: Request, res: Response) => {
  const newTools = await toolService.postTool(req.body.tool);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    result: newTools,
    message: "new tool added successfully",
  });
});

const toolUpdate = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const toolData = req.body.tool;

  const updatedTool = await toolService.updateTool(id, toolData);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    result: updatedTool,
    message: "tool updated successfully",
  });
});

const deleteTool = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const tool = await toolService.deleteSingleTool(id);

  if (!tool) {
    return res.status(404).send();
  }

  sendResponse(res, {
    success: true,
    statusCode: 200,
    result: tool,
    message: "tool updated successfully",
  });
});

export const toolController = {
  getAllTool,
  postTool,
  toolUpdate,
  deleteTool,
};
