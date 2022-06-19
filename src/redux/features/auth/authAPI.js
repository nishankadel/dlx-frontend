import axios from "axios";

const API_URL = "http://localhost:8000/api/auth/";

export const signIn = (formData) => {
  return axios.post(`${API_URL}/login`, formData);
};
export const signUp = (formData) => {
  return axios.post(`${API_URL}/register`, formData);
};
