import axios from "axios";

export const userApi = axios.create({
  baseURL: import.meta.env.VITE_USER_API
});

export const productApi = axios.create({
  baseURL: import.meta.env.VITE_PRODUCT_API
});

export const orderApi = axios.create({
  baseURL: import.meta.env.VITE_ORDER_API
});