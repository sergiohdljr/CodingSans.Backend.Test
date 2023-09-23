import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config";
import { userExists } from "../utils/userExists";

export const authenticationJwt = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const headerAuth = req.headers.authorization;
  if (!headerAuth?.includes("Bearer")) {
    return res.sendStatus(401);
  }

  const token = headerAuth.split(" ")[1];

  jwt.verify(token, config.jwt.secret as string, async (err, verfied) => {
    if (err) {
      return res.sendStatus(403);
    }

    const userExist = await userExists(verfied.username);

    if (!userExist) {
      return res.sendStatus(403);
    }

    next();
  });
};
