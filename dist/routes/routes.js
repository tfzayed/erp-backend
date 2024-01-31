"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const asset_routes_1 = __importDefault(require("../modules/asset/asset.routes"));
const calendar_routes_1 = __importDefault(require("../modules/calendar/calendar.routes"));
const course_routes_1 = __importDefault(require("../modules/course/course.routes"));
const profile_routes_1 = __importDefault(require("../modules/profile/profile.routes"));
const tool_routes_1 = __importDefault(require("../modules/tool/tool.routes"));
const user_routes_1 = __importDefault(require("../modules/user/user.routes"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/user",
        route: user_routes_1.default,
    },
    {
        path: "/asset",
        route: asset_routes_1.default,
    },
    {
        path: "/course",
        route: course_routes_1.default,
    },
    {
        path: "/profile",
        route: profile_routes_1.default,
    },
    {
        path: "/tool",
        route: tool_routes_1.default,
    },
    {
        path: "/calendar",
        route: calendar_routes_1.default,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
//# sourceMappingURL=routes.js.map