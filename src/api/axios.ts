import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:5001/gateway/api/`,
  withCredentials: true,
});
export default api;
