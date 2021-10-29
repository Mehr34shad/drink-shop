import axios from "axios";
import { errorMessage } from '../utils/message';

axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.response.use(null, error => {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;

    if (!expectedError) {
        console.log(error);
        errorMessage("There was a problem with the server!")
    }

    return Promise.reject(error);
});


// for console error "Assign object to a variable before exporting as module default warning"
const exportedObject = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
};

export default exportedObject;