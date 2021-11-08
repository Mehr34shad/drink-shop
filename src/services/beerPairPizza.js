import http from "./httpService";
import config from "./config.json";

export const getBeerPairPizza = () => {
    return http.get(`${config.punkapi}beers?food=pizza`);
}
