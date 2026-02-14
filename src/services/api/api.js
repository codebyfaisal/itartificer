import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

axios.defaults.baseURL = API_URL;

const api = axios.create();

api.interceptors.request.use(
    (config) => {

        return config;
    },
    (error) => {

        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        console.log(response)
        return response;
    },
    (error) => {

        return Promise.reject(error);
    }
);