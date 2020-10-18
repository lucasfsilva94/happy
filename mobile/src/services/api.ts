import axios from "axios";

const api = axios.create({
  baseURL: "http://172.19.40.231:3333",
});

export default api;
