import axios from "axios";
import {cleanToken} from "./token";


export const API_URL = 'http://127.0.0.1:8000/api'

const $api = axios.create({
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    // config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

$api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    if (error.response === undefined) {
        cleanToken();
    } else if (error.response.status === 401 && error.config && !error.config._isRetry) {
        error.config._isRetry = true;
        let rtoken = localStorage.getItem('tokenRefresh')
        const {data} = await axios.post(`${API_URL}/token/refresh/`,
            {refresh: rtoken},
            {
                headers:
                    {'Content-Type': 'application/json'}
            })
        localStorage.setItem('tokenAccess', data.access);
        error.config.headers = {Authorization: `Bearer ${data.access}`}
        const ret = await $api.request(error.config);
        return ret
    }
})


export const auth = async (username, password) => {
    const {data} = await $api.post('/token/',
        {
            password: password,
            username: username
        });
    console.log("Write token....")
    localStorage.setItem('tokenAccess', data.access)
    localStorage.setItem('tokenRefresh', data.refresh)

}

export default $api;