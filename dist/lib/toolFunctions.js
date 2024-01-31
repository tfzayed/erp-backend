"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTool = exports.toolUpdate = exports.toolsRemove = exports.toolInsert = void 0;
const toolInsert = (tool) => {
    let bulk_ops_arr = [];
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
exports.toolInsert = toolInsert;
const toolsRemove = (tools) => {
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
exports.toolsRemove = toolsRemove;
const toolUpdate = (tools) => {
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
exports.toolUpdate = toolUpdate;
const deleteTool = (tool) => {
    var _a, _b, _c;
    let bulk_ops_arr = [];
    for (let user of (_c = (_b = (_a = tool === null || tool === void 0 ? void 0 : tool.organization) === null || _a === void 0 ? void 0 : _a.map((org) => org.users.map((data) => data))) === null || _b === void 0 ? void 0 : _b.flat()) !== null && _c !== void 0 ? _c : []) {
        let update_op = {
            updateOne: {
                filter: { user_id: user },
                update: {
                    $pull: {
                        tools: {
                            $in: tool === null || tool === void 0 ? void 0 : tool.organization.map((data) => data.unique_id),
                        },
                    },
                },
            },
        };
        bulk_ops_arr.push(update_op);
    }
    return bulk_ops_arr;
};
exports.deleteTool = deleteTool;
//# sourceMappingURL=toolFunctions.js.map