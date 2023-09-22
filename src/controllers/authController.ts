import { Request, Response } from "express";
import { userDTO } from "../types/userDTO";
import userRepository from "../dataAccess/userRepository";
import { compareHashPassword } from "../utils/compareHashPassword";
import { generateAcessToken } from "../utils/generateAcessToken";

class AuthController {
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

export default new AuthController();
