import userService from "../services/userService";
import { Request, Response } from "express";
import { userExists } from "../utils/userExists";
import { userDTO } from "../types/userDTO";

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
}

export default new UserController();
