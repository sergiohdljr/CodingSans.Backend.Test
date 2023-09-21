import { PrismaClient } from "@prisma/client";
import { prisma } from "../dataAccess/db";
import { userTypePayload } from "../types/userTypes";
import { hashPassword } from "../utils/hashPassword";

class UserService {
  db: PrismaClient;

  constructor() {
    this.db = prisma;
  }

  async saveUser(payload: userTypePayload) {
    const { username, password } = payload;

    await this.db.user.create({
      data: {
        username,
        password: hashPassword(password),
      },
    });
  }
}

export default new UserService();
