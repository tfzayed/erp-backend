import { CourseType } from "@/modules/course/course.type";

export const courseInsert = (course: CourseType) => {
  let bulk_ops_arr: any = [];
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

//remove courses on update
export const courseRemove = (courses: CourseType) => {
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

// update course to user
export const courseUpdate = (courses: CourseType) => {
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

// delete course access from user
export const deleteCourse = (course: CourseType) => {
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
