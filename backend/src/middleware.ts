import type { NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "./config.js";

export const userMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //@ts-ignore
  const header = req.headers["authorization"];
  const decode = jwt.verify(header as string, JWT_PASSWORD);

  if (decode) {
    //@ts-ignore
    req.userId = decode.id;
    next();
  } else {
    //@ts-ignore
    res.status(403).json({
      message: "Incorrect Credentials",
    });
  }
};
