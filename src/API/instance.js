import axios from "axios";

export const apiClient = axios.create({
  baseURL: 'https://api.binance.com',
  headers: {
    'Content-Type': 'application/json',
  },
})