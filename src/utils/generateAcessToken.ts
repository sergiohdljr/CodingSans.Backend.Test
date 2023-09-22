import jwt from "jsonwebtoken";
import { config } from "../config";

export const generateAcessToken = (username: string) => {
  return jwt.sign({ username }, config.jwt.secret as string, {
    expiresIn: "1800s",
  });
};
