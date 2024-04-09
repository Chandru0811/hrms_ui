import axios from "axios";

const api = axios.create({
  baseURL: "http://13.213.208.92:7081/ecshrms/api/",
});

export default api;
