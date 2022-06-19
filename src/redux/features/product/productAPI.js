import axios from "axios";

const API_URL = "http://localhost:8000/api/product/";

export const getAllProducts = () => {
  return axios.get(`${API_URL}/all-products`);
};

export const getSingleProduct = (id) => {
  return axios.get(`${API_URL}/single-product/${id}`);
};
