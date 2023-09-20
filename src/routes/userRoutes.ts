import { Router } from "express";
import userController from "../controllers/userController";

export const rotas = Router();

rotas.post("/create", userController.createUser);
