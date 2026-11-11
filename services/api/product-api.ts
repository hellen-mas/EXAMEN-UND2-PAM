import axios from 'axios';

export const productApi = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    timeout: 10000,
});