import { ProfileType } from "@/modules/profile/profile.type";

export const profileInsert = (profile: ProfileType) => {
  let bulk_ops_arr: any = [];
  for (let user of profile.profiles
    .map((el) => el.users.map((data) => data))
    .flat()) {
    let update_op = {
      updateOne: {
        filter: { user_id: user },
        update: {
          $push: {
            profiles: profile.profiles
              .filter((el) => el.users.includes(user))
              .map((data) => data.unique_id),
          },
        },
      },
    };

    bulk_ops_arr.push(update_op);
  }
  return bulk_ops_arr;
};

//remove profiles on update
export const profileRemove = (profiles: ProfileType) => {
  let remove_arr = [];

  let remove = {
    updateMany: {
      filter: {},
      update: {
        $pullAll: {
          profiles: profiles.profiles.map((data) => data.unique_id),
        },
      },
    },
  };
  remove_arr.push(remove);
  return remove_arr;
};

// update profile to user
export const profileUpdate = (profiles: ProfileType) => {
  let bulk_ops_arr = [];

  for (let user of profiles.profiles
    .map((el) => el.users.map((data) => data))
    .flat()) {
    let update_op = {
      updateOne: {
        filter: { user_id: user },
        update: {
          $addToSet: {
            profiles: profiles.profiles
              .filter((el) => el.users.includes(user))
              .map((data) => data.unique_id),
          },
        },
      },
    };
    bulk_ops_arr.push(update_op);
  }
  return bulk_ops_arr;
};

// delete profile access from user\
export const deleteProfile = (profiles: ProfileType) => {
  let bulk_ops_arr = [];
  for (let user of profiles.profiles
    .map((org) => org.users.map((data) => data))
    .flat()) {
    let update_op = {
      updateOne: {
        filter: { user_id: user },
        update: {
          $pullAll: {
            profiles: profiles.profiles.map((data) => data.unique_id),
          },
        },
      },
    };

    bulk_ops_arr.push(update_op);
  }
  return bulk_ops_arr;
};
