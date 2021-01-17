const axios = require("axios");
// const BASE_URL = "http://localhost:5000";

const BASE_URL = "https://backend-for-react-blog-render.herokuapp.com";
export const data = async (params) => {
  return axios.get(`${BASE_URL}${params}`);
};

// const url = "https://niravkpatel28.github.io/json-data-server/blogs/blogs.json";
