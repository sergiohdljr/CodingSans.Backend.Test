import userService from "../services/userService";
import { userType } from "../types/userTypes";
import { Request, Response } from "express";
import { userExists } from "../utils/userExists";

class UserController {
  async createUser(req: Request, res: Response) {
    const payload = req.body as unknown as userType;
    const username = payload.username;

    if (await userExists(username)) {
      return res.sendStatus(409)
    }

    try {
      await userService.saveUser(payload);

      return res.sendStatus(201)
    } catch (error) {
      return res.sendStatus(400)
    }
  }
}

export default new UserController();
