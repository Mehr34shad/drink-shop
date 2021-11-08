import http from "./httpService";
import config from "./config.json";

export const getAllBeerList = () => {
    return http.get(`${config.punkapi}beers`);
}


