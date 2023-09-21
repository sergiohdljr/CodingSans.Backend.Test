import { PrismaClient } from "@prisma/client";
import { prisma } from "../dataAccess/db";
import { hashPassword } from "../utils/hashPassword";
import User from "../models/userModel";

class UserService {
  db: PrismaClient;

  constructor() {
    this.db = prisma;
  }

  async saveUser(username: string, password: string) {
    const user = new User(username, password);
    const hashSenha = hashPassword(user.getPassword());
    user.setPassword(hashSenha);

    await this.db.user.create({
      data: {
        username: user.getUsername(),
        password: user.getPassword(),
      },
    });
  }
}

export default new UserService();
