"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProfile = exports.profileUpdate = exports.profileRemove = exports.profileInsert = void 0;
const profileInsert = (profile) => {
    let bulk_ops_arr = [];
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
exports.profileInsert = profileInsert;
//remove profiles on update
const profileRemove = (profiles) => {
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
exports.profileRemove = profileRemove;
// update profile to user
const profileUpdate = (profiles) => {
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
exports.profileUpdate = profileUpdate;
// delete profile access from user\
const deleteProfile = (profiles) => {
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
exports.deleteProfile = deleteProfile;
//# sourceMappingURL=profileFunctions.js.map