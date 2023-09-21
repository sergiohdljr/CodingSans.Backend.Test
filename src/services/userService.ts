import { PrismaClient } from "@prisma/client";
import { prisma } from "../dataAccess/db";
import { hashPassword } from "../utils/hashPassword";
import User from "../models/userModel";
import { userDTO } from "../types/userDTO";

class UserService {
  db: PrismaClient;

  constructor() {
    this.db = prisma;
  }

  async saveUser(user: userDTO) {
    const NewUser = new User(user);
    const hashSenha = hashPassword(NewUser.getPassword());
    NewUser.setPassword(hashSenha);

    await this.db.user.create({
      data: {
        username: NewUser.getUsername(),
        password: NewUser.getPassword(),
      },
    });
  }
}

export default new UserService();
