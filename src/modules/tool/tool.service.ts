import {
  deleteTool,
  toolInsert,
  toolUpdate,
  toolsRemove,
} from "@/lib/toolFunctions";
import { User } from "../user/user.model";
import { Tool } from "./tool.model";
import { ToolType } from "./tool.type";

const getAllTool = async (): Promise<ToolType[]> => {
  const tools = await Tool.find({});
  return tools;
};

const postTool = async (toolData: ToolType) => {
  if (!toolData.platform) {
    throw { status: 401, message: "Data are missing" };
  }

  const postData = new Tool({
    ...toolData,
    organization: toolData.organization.map((d) => ({
      ...d,
      unique_id: toolData.platform + d.name,
    })),
  });

  const newTool = await postData.save();

  // Add tool to user
  if (toolData.organization.length) {
    await User.bulkWrite(toolInsert(newTool));
  }

  return newTool;
};

const updateTool = async (id: string, toolData: ToolType) => {
  const updatedToo = await Tool.updateOne(
    { _id: id },
    {
      $set: {
        name: toolData.platform,
        website: toolData.website,
        price: toolData.price,
        email: toolData.email,
        password: toolData.password,
        purchase_date: toolData.purchase_date,
        expire_date: toolData.expire_date,
        organization: toolData.organization,
      },
    }
  );

  const removeTool = await User.bulkWrite(toolsRemove(toolData));

  if (removeTool.modifiedCount > 0) {
    await User.bulkWrite(toolUpdate(toolData));
  }
  return updatedToo;
};

const deleteSingleTool = async (id: string) => {
  const tool = await Tool.findByIdAndDelete(id);
  if (!tool) {
    return null;
  } else {
    await User.bulkWrite(deleteTool(tool));
  }

  return tool;
};

export const toolService = {
  getAllTool,
  postTool,
  updateTool,
  deleteSingleTool,
};
