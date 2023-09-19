import { Router } from "express";

export const rotas = Router();

rotas.get("/", async (req, res) => {
  res.send("hello mami") ;
});
rotas.post("/create", async (req, res) => {});
rotas.delete("/delete/:id", async (req, res) => {});
rotas.put("/edit/:id", async (req, res) => {});
