import { Request, Response } from "express";
import breweriesService from "../services/breweriesService";
import QueryString from "qs";

class BreweriesController {
  async getAllBreweries(req: Request, res: Response) {
    const searchQuery = QueryString.stringify(req.query);

    const breweriesList = await breweriesService.findAll(searchQuery);
    return res.json(breweriesList);
  }
}

export default new BreweriesController();
