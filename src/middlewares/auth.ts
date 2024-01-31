import config from "@/config/variables";
import ApiError from "@/errors/ApiError";
import { jwtHelpers } from "@/lib/jwtTokenHelper";
import { User } from "@/modules/user/user.model";
import { NextFunction, Request, Response } from "express";
import { Secret } from "jsonwebtoken";

const auth =
  (...requestRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization as string;
      const verifyToken = `${token.split(" ")[1]}`;

      const verfiedToken = jwtHelpers.verifyToken(
        verifyToken,
        config.jwt_secret as Secret,
      );

      const isUser = await User.findOne({ id: verfiedToken.id });

      if (!isUser) {
        throw new ApiError("User not found", 401, "");
      }
      next();
    } catch (error) {
      next(error);
    }
  };

export default auth;
