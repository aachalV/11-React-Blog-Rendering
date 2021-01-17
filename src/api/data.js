const axios = require("axios");
const BASE_URL = "http://localhost:5000";

export const data = async (params) => {
  return axios.get(`${BASE_URL}${params}`);
};

// const url = "https://niravkpatel28.github.io/json-data-server/blogs/blogs.json";
