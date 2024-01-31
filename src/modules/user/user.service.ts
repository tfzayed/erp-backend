import { Asset } from "../asset/asset.model";
import { Course } from "../course/course.model";
import { Tool } from "../tool/tool.model";
import { User } from "./user.model";
import { UserType } from "./user.type";

const getAllUser = async (email: string): Promise<UserType[]> => {
  let users;

  const user = await User.find({ email: email });

  if (user[0]?.role === "admin") {
    users = await User.find({});
  } else {
    users = await User.find({ email: email });
  }

  return users;
};

const postUser = async (payload: UserType) => {
  const newUserData = new User(payload);
  const newUser = newUserData.save();
  return newUser;
};

const updateUser = async (id: string, userData: UserType) => {
  const updateUser = await User.updateOne({ _id: id }, { $set: userData });
  return updateUser;
};

const deleteUser = async (id: string) => {
  const deletedUser = await User.findByIdAndDelete(id);
  if (!deletedUser) {
    return { success: false, message: "User not found" };
  }

  // Delete user from tools
  await Tool.updateMany(
    { "organization.unique_id": { $in: deletedUser.tools } },
    { $pull: { "organization.$[elm].user": id } },
    { arrayFilters: [{ "elm.unique_id": { $in: deletedUser.tools } }] }
  );

  // Delete user from courses
  await Course.updateMany(
    { "course.unique_id": { $in: deletedUser.courses } },
    { $pull: { "course.$[elm].user": id } },
    { arrayFilters: [{ "elm.unique_id": { $in: deletedUser.courses } }] }
  );

  // Delete user from asset
  await Asset.updateOne(
    {
      user: id,
    },
    {
      $unset: {
        user: "",
      },
    }
  );
  return deletedUser;
};

export const userService = {
  getAllUser,
  postUser,
  updateUser,
  deleteUser,
};
