import config from "@/config/variables";
import { RequestHandler } from "express";
import { IncomingHttpHeaders } from "http";

export const checkToken: RequestHandler = (req, res, next) => {
  const { authorization }: IncomingHttpHeaders = req.headers;
  try {
    const token = authorization!.split(" ")[1];
    if (token == config.token) {
      next();
    }
  } catch (error) {
    next("faild fetching");
  }
};
