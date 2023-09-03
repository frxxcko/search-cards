import axios from "axios";

export const AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SCRYFALL_API,
    headers: {
        Accept: "application/json",
    },
    timeout: 31000,
})