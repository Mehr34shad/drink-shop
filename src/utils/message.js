import { toast } from "react-toastify";

export const successMessage = message => {
    toast.success(message, {
        position: 'bottom-left',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        progress: false,
    });
};


export const errorMessage = message => {
    toast.error(message, {
        position: 'bottom-left',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        progress: false,
    });
};


export const infoMessage = message => {
    toast.info(message, {
        position: 'bottom-left',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        progress: false,
    });
};
export const warningMessage = message => {
    toast.warning(message, {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        progress: false,
      });
};
