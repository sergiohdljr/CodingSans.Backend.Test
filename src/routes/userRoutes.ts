import { Router } from "express";
import userController from "../controllers/userController";
import authController from "../controllers/authController";

export const rotas = Router();

rotas.post("/create", userController.createUser);
rotas.post("/login", authController.login);
