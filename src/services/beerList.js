import http from "./httpService";
import config from "./config.json";

export const getBeerList = () => {
    return http.get(`${config.punkapi}beers`)
}


