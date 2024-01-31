import catchAsync from "@/lib/catchAsync";
import { sendResponse } from "@/lib/sendResponse";
import { Request, Response } from "express";
import { profileService } from "./profile.service";

const getAllProfile = catchAsync(async (req: Request, res: Response) => {
  const profiles = await profileService.getAllProfile();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    result: profiles,
    message: "data get successfully",
  });
});

const postProfile = catchAsync(async (req: Request, res: Response) => {
  const profileData = req.body.profile;

  const newProfile = await profileService.postProfile(profileData);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    result: newProfile,
    message: "new profile added successfully",
  });
});

const updateProfile = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const profileData = req.body.profile;

  const updatedProfile = await profileService.updateProfile(id, profileData);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    result: updatedProfile,
    message: "profile updated successfully",
  });
});

const profileDelete = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const deletedProfile = await profileService.profileDelete(id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    result: deletedProfile,
    message: "profile updated successfully",
  });
});

export const profileController = {
  getAllProfile,
  postProfile,
  updateProfile,
  profileDelete,
};
