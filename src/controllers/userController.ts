import userService from "../services/userService";
import { Request, Response } from "express";
import { userExists } from "../utils/userExists";
import { userDTO } from "../types/userDTO";
import { compareHashPassword } from "../utils/compareHashPassword";
import userRepository from "../dataAccess/userRepository";
import { generateAcessToken } from "../utils/generateAcessToken";

class UserController {
  async createUser(req: Request, res: Response) {
    const payload = req.body as unknown as userDTO;

    if (await userExists(payload.username)) {
      return res.sendStatus(409);
    }

    try {
      await userService.saveUser(payload);

      return res.sendStatus(201);
    } catch (error) {
      return res.sendStatus(400);
    }
  }

  async login(req: Request, res: Response) {
    const { username, password } = req.body as userDTO;
    const user = await userRepository.findUser(username);

    if (!user) {
      return res.sendStatus(404);
    }

    const passwordIsValid = await compareHashPassword(password, user.password);

    if (passwordIsValid === false) {
      return res.sendStatus(401);
    }

    const token = generateAcessToken(username);

    return res.json({
      token,
    });
  }
}

export default new UserController();
