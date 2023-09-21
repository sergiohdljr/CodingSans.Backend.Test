import bcrypt from "bcrypt";
import { config } from "../config";

export const hashPassword = (password: string) => {
  const { genSaltSync, hashSync } = bcrypt;
  const numberOfRounds = parseInt(config.hash.saltRounds as string);
  const salt = genSaltSync(numberOfRounds);

  const hash = hashSync(password, salt);

  return hash;
};
