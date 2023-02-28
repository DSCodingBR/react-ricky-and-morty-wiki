import axios from "axios";

const service = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export default service;
