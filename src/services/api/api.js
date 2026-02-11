import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

axios.defaults.baseURL = API_URL;

const api = axios.create();

api.interceptors.request.use(
    (config) => {
        console.log(config)
        return config;
    },
    (error) => {
        console.log(error)
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        console.log(response)
        return response;
    },
    (error) => {
        console.log(error)
        return Promise.reject(error);
    }
);