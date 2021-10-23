import axios from "axios";
import { errorMessage } from '../utils/message';

axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.response.use(null, error => {
    const expectedErrors =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
    if (!expectedErrors) {
        console.log(error);
        errorMessage("There was a problem with the server!")

    }

    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
};
