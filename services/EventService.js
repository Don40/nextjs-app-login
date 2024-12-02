import axios from 'axios'

const REST_API_BASE_URL = "http://localhost:8080/events";
const REST_API_BASE_URL_HEROKU = "https://ctc-online-9bb755f6240f.herokuapp.com/events";

export const getEventTypes = () => {
    return axios.get(`${REST_API_BASE_URL}/event-type`)
}
