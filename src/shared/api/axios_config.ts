import axios from "axios"

const $api = axios.create({
    baseURL: 'https://swapi.dev/api/people/',
    headers: {'content-type': 'application/json'}
});

export default $api