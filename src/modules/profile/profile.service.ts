import {
  deleteProfile,
  profileInsert,
  profileRemove,
  profileUpdate,
} from "@/lib/profileFunctions";
import { User } from "../user/user.model";
import { Profile } from "./profile.model";
import { ProfileType } from "./profile.type";

const getAllProfile = async (): Promise<ProfileType[]> => {
  const profiles = await Profile.find({}).populate("profiles");
  return profiles;
};

const postProfile = async (profileData: ProfileType) => {
  try {
    if (!profileData.platform || !profileData.website) {
      return { success: false, error: "Data is missing" };
    }

    const postData = new Profile({
      ...profileData,
      profiles: profileData.profiles.map((data) => {
        return {
          ...data,
          unique_id: profileData.platform + data.name,
        };
      }),
    });

    const profile = await postData.save();
    await User.bulkWrite(profileInsert(profile));

    return { success: true, message: "Data added successfully" };
  } catch (error) {
    console.error("Error creating profile:", error);
    throw { status: 500, message: "Internal Server Error" };
  }
};

const updateProfile = async (id: string, profileData: ProfileType) => {
  const updatedProfile = await Profile.updateOne(
    { _id: id },
    {
      $set: {
        platform: profileData.platform,
        website: profileData.website,
        profiles: profileData.profiles,
      },
    }
  ).clone();

  const removeProfile = await User.bulkWrite(profileRemove(profileData));

  if (removeProfile.modifiedCount > 0) {
    await User.bulkWrite(profileUpdate(profileData));
  }

  return updatedProfile;
};

const profileDelete = async (id: string) => {
  try {
    const deletedProfile = await Profile.findByIdAndDelete(id);

    if (!deletedProfile) {
      return null;
    }

    await User.bulkWrite(deleteProfile(deletedProfile));

    return deletedProfile;
  } catch (error) {
    throw error;
  }
};

export const profileService = {
  getAllProfile,
  postProfile,
  updateProfile,
  profileDelete,
};
