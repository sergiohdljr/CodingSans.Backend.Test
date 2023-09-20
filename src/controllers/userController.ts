import userService from "../services/userService";
import { userType } from "../types/userTypes";
import { Request, Response } from "express";

class UserController {
  async createUser(req: Request, res: Response) {
    const payload = req.body as unknown as userType;

    try {
      await userService.saveUser(payload);

      return res.status(201).send({
        message: "user created",
      });
    } catch (error) {
      return res.send(400).send({
        message: "internal server error",
      });
    }
  }
}

export default new UserController();
