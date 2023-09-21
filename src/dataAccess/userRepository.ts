import { PrismaClient } from "@prisma/client";
import { prisma } from "./db";
import { userType } from "../types/userTypes";

class UserRepository {
  db: PrismaClient;

  constructor() {
    this.db = prisma;
  }

  async findUser(username: string): Promise<userType | null> {
    const user = await this.db.user.findUnique({
      where: {
        username,
      },
    });

    return user;
  }
}

export default new UserRepository();
