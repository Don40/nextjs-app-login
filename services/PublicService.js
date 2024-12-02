import axios from 'axios'
const REST_API_BASE_URL = "http://localhost:8080";
const REST_API_BASE_URL_HEROKU = "https://ctc-online-9bb755f6240f.herokuapp.com";




export const notifyMe = (values) => {
    return axios.post(`${REST_API_BASE_URL}/notify-me`, values)
}

export const connectMe = (values) => {
    return axios.post(`${REST_API_BASE_URL}/connect`, values)
}