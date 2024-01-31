import assetRouter from "@/modules/asset/asset.routes";
import calendarRouter from "@/modules/calendar/calendar.routes";
import courseRouter from "@/modules/course/course.routes";
import profileRouter from "@/modules/profile/profile.routes";
import toolRouter from "@/modules/tool/tool.routes";
import userRouter from "@/modules/user/user.routes";
import express from "express";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/user",
    route: userRouter,
  },
  {
    path: "/asset",
    route: assetRouter,
  },
  {
    path: "/course",
    route: courseRouter,
  },
  {
    path: "/profile",
    route: profileRouter,
  },
  {
    path: "/tool",
    route: toolRouter,
  },
  {
    path: "/calendar",
    route: calendarRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
