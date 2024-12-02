import axios from 'axios'

const REST_API_BASE_URL = "http://localhost:8080/api/auth";
const REST_API_BASE_URL_HEROKU = "https://ctc-online-9bb755f6240f.herokuapp.com/api/auth";

export const signIn = (loginDetails) => {
    return axios.post(`${REST_API_BASE_URL}/signin`, loginDetails, { headers: { 'Content-Type': 'application/json' } })
}

// export const signUp = () => {
//     return axios.post(`${REST_API_BASE_URL_HEROKU}/signup`)
// }