import axios from "axios";

class BreweriesService {
  async findAll(search?: string) {
    const baseUrl = "https://api.openbrewerydb.org/breweries";
    const breweriesList: any[] = [];
    const searchQueryExist = search ? `/search?${search}` : "";

    const { data } = await axios.get(`${baseUrl}${searchQueryExist}`);
    breweriesList.push(data);
    console.log(`${baseUrl}${searchQueryExist}`);
    return breweriesList;
  }
}

export default new BreweriesService();
