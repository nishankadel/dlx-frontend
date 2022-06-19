import axios from "axios";

const API_URL = "http://localhost:8000/api/user/";



export const getProfile = (token) => {
  return axios.get(`${API_URL}/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
