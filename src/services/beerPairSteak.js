import http from "./httpService";
import config from "./config.json";

export const getBeerPairSteak = () => {
    return http.get(`${config.punkapi}beers?food=steak`);
}
