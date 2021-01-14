const axios = require("axios");
// const url =
//   "https://niravkpatel28.github.io/json-data-server/employees/employees.json";
const url = "https://niravkpatel28.github.io/json-data-server/blogs/blogs.json";
//immediately invoked funtion expression IIFE
const fetchData = async (id) => {
  let response = await axios.get(url + id);

  return response.data;
};
export default fetchData;
