import userService from "../services/userService";
import { userTypePayload } from "../types/userTypes";
import { Request, Response } from "express";
import { userExists } from "../utils/userExists";

class UserController {
  async createUser(req: Request, res: Response) {
    const { username, password } = req.body as unknown as userTypePayload;

    if (await userExists(username)) {
      return res.sendStatus(409);
    }

    try {
      await userService.saveUser(username, password);

      return res.sendStatus(201);
    } catch (error) {
      return res.sendStatus(400);
    }
  }
}

export default new UserController();
