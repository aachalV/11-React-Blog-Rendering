const axios = require("axios");
// const url =
//   "https://niravkpatel28.github.io/json-data-server/employees/employees.json";
const url = "https://niravkpatel28.github.io/json-data-server/blogs/blogs.json";
//immediately invoked funtion expression IIFE
export const data = (async () => {
  let response = await axios.get(url);

  return response.data;
})();
