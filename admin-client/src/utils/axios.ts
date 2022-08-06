import axios from "axios";

const BASE_URL = process.env.SERVER_ADDRESS || "http://localhost:8001";

const instance = axios.create({
  baseURL: BASE_URL,
});

export { instance as axios };
