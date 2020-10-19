import axios from "axios";

const api = axios.create({
  baseURL: "https://happy-app-nlw3.herokuapp.com",
});

export default api;
