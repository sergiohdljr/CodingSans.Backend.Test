import axios from "axios";
import { PartialBreweries } from "../types/breweriesTypes";
import { config } from "../config";

class BreweriesService {
  private url: string;
  private breweries: PartialBreweries[];

  constructor() {
    this.url = config.axios.url;
    this.breweries = [];
  }

  async findAll(search?: string): Promise<PartialBreweries[]> {
    const searchQueryExist = search ? `/search?${search}` : "";
    const { data } = await axios.get(`${this.url}${searchQueryExist}`);
    const breweriesList = (this.breweries = data);

    return breweriesList;
  }
}

export default new BreweriesService();
