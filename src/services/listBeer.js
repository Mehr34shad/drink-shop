import http from "./httpService";
import config from "./config.json";

export const getResourceList = () => {
    return http.get(`${config.reqres}beers`)
}
