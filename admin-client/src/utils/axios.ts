import axios from "axios";

const BASE_URL = process.env.SERVER_ADDRESS || "http://localhost:8000";

const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;
