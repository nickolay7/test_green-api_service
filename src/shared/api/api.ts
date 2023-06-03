import axios from 'axios';

const URL = 'https://api.green-api.com';

export const $api = axios.create({
    baseURL: URL,
});
