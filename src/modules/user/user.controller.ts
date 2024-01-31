import catchAsync from "@/lib/catchAsync";
import { sendResponse } from "@/lib/sendResponse";
import { Request, Response } from "express";
import { userService } from "./user.service";

const getAllUser = catchAsync(async (req: Request, res: Response) => {
  const { email } = req.query;
  const users = await userService.getAllUser(email as string);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    result: users,
    message: "data get successfully",
  });
});

const postUser = catchAsync(async (req: Request, res: Response) => {
  const newUser = await userService.postUser(req?.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    result: newUser,
    message: "new user added successfully",
  });
});

const updateUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const userData = {
    name: req?.body.name,
    email: req?.body.email,
    dob: req?.body.dob,
    phone: req?.body.phone,
    gender: req?.body.gender,
    blood_group: req?.body.blood_group,
    marital_status: req?.body.marital_status,

    nid: req?.body.nid,
    tin: req?.body.tin,

    present_address: req?.body.present_address,
    permanent_address: req?.body.permanent_address,

    office_id: req?.body.office_id,
    team: req?.body.team,
    role: req?.body.role,
    department: req?.body.department,
    designation: req?.body.designation,
    employment_type: req?.body.employment_type,
    join_date: req?.body.join_date,
    permanent_join: req?.body.permanent_join,
    resignation_date: req?.body.resignation_date,
    manager: req?.body.manager,
    achievements: req?.body.achievements,
    archived: req?.body.archived,

    date: req?.body.date,
    banks: req?.body.banks,
    note: req?.body.note,

    contacts: req?.body.contacts,
    logs: req?.body.logs,
  };

  const updatedUser = await userService.updateUser(id, userData);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    result: updatedUser,
    message: "user updated successfully",
  });
});

const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const deletedUser = await userService.deleteUser(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    result: deletedUser,
    message: "user deleted successfully",
  });
});

export const userController = {
  getAllUser,
  postUser,
  updateUser,
  deleteUser,
};
