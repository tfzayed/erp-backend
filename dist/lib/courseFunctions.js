"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCourse = exports.courseUpdate = exports.courseRemove = exports.courseInsert = void 0;
const courseInsert = (course) => {
    let bulk_ops_arr = [];
    for (let user of course.course
        .map((el) => el.users.map((data) => data))
        .flat()) {
        let update_op = {
            updateOne: {
                filter: { user_id: user },
                update: {
                    $push: {
                        courses: course.course
                            .filter((el) => el.users.includes(user))
                            .map((data) => data.id),
                    },
                },
            },
        };
        bulk_ops_arr.push(update_op);
    }
    return bulk_ops_arr;
};
exports.courseInsert = courseInsert;
//remove courses on update
const courseRemove = (courses) => {
    let remove_arr = [];
    let remove = {
        updateMany: {
            filter: {},
            update: {
                $pullAll: {
                    courses: courses.course.map((data) => data.id),
                },
            },
        },
    };
    remove_arr.push(remove);
    return remove_arr;
};
exports.courseRemove = courseRemove;
// update course to user
const courseUpdate = (courses) => {
    let bulk_ops_arr = [];
    for (let user of courses.course
        .map((el) => el.users.map((data) => data))
        .flat()) {
        let update_op = {
            updateOne: {
                filter: { user_id: user },
                update: {
                    $addToSet: {
                        courses: courses.course
                            .filter((el) => el.users.includes(user))
                            .map((data) => data.id),
                    },
                },
            },
        };
        bulk_ops_arr.push(update_op);
    }
    return bulk_ops_arr;
};
exports.courseUpdate = courseUpdate;
// delete course access from user
const deleteCourse = (course) => {
    let bulk_ops_arr = [];
    for (let user of course.course
        .map((org) => org.users.map((data) => data))
        .flat()) {
        let update_op = {
            updateOne: {
                filter: { user_id: user },
                update: {
                    $pullAll: {
                        courses: course.course.map((data) => data.id),
                    },
                },
            },
        };
        bulk_ops_arr.push(update_op);
    }
    return bulk_ops_arr;
};
exports.deleteCourse = deleteCourse;
//# sourceMappingURL=courseFunctions.js.map