import catchAsync from "@/lib/catchAsync";
import { sendResponse } from "@/lib/sendResponse";
import { Request, Response } from "express";
import { assetService } from "./asset.service";

const getAllAsset = catchAsync(async (req: Request, res: Response) => {
  const assets = await assetService.getAllAsset();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    result: assets,
    message: "data get successfully",
  });
});

const postAsset = catchAsync(async (req: Request, res: Response) => {
  const assetData = await assetService.postAsset(req.body.asset);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    result: assetData,
    message: "asset posted successfully",
  });
});

const updateAsset = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updateData = req.body;

  const updatedData = await assetService.updateAsset(id, updateData);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    result: updatedData,
    message: "asset updated successfully",
  });
});

const assetDelete = catchAsync(async (req: Request, res: Response) => {
  const deletedAsset = await assetService.assetDelete(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    result: deletedAsset,
    message: "asset deleted successfully",
  });
});

export const assetController = {
  getAllAsset,
  postAsset,
  updateAsset,
  assetDelete,
};
