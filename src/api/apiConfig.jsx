// src/api/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: "CHAVE BASE DA API",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json"
  }
});

export default api;
