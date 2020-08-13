import axios from "axios";


export const axiosWithAuth = () => {
    const token = window.localStorage.getItem("authToken");


    return axios.create({
        headers: {
            "Authorization": `${token}`,
        },
        baseURL: "http://localhost:5000/api"
    })
};