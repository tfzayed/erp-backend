import { ToolType } from "@/modules/tool/tool.type";

export const toolInsert = (tool: ToolType) => {
  let bulk_ops_arr: any = [];
  for (let user of tool.organization
    .map((org) => org.users.map((data) => data))
    .flat()) {
    let update_op = {
      updateOne: {
        filter: { user_id: user },
        update: {
          $push: {
            tools: tool.organization
              .filter((org) => org.users.includes(user))
              .map((data) => data.unique_id),
          },
        },
      },
    };

    bulk_ops_arr.push(update_op);
  }

  return bulk_ops_arr;
};

export const toolsRemove = (tools: ToolType) => {
  let remove_arr = [];
  let remove = {
    updateMany: {
      filter: {},
      update: {
        $pullAll: {
          tools: tools.organization.map((data) => data.unique_id),
        },
      },
    },
  };
  remove_arr.push(remove);
  return remove_arr;
};

export const toolUpdate = (tools: ToolType) => {
  let bulk_ops_arr = [];
  for (let user of tools.organization
    .map((org) => org.users.map((data) => data))
    .flat()) {
    let update_op = {
      updateOne: {
        filter: { user_id: user },
        update: {
          $addToSet: {
            tools: tools.organization
              .filter((org) => org.users.includes(user))
              .map((data) => data.unique_id),
          },
        },
      },
    };
    bulk_ops_arr.push(update_op);
  }
  return bulk_ops_arr;
};

export const deleteTool = (tool: ToolType) => {
  let bulk_ops_arr = [];
  for (let user of tool?.organization
    ?.map((org) => org.users.map((data) => data))
    ?.flat() ?? []) {
    let update_op = {
      updateOne: {
        filter: { user_id: user },
        update: {
          $pull: {
            tools: {
              $in: tool?.organization.map((data) => data.unique_id),
            },
          },
        },
      },
    };

    bulk_ops_arr.push(update_op);
  }
  return bulk_ops_arr;
};
