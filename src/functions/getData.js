const axios = require("axios");
const urlRegex = require("url-regex");

module.exports = getData = async URL => {
  try {
    const res = await axios.get(URL);
    const resp = new Object(res);
    const data = Object.entries(resp);
    const newData = data.join().match(urlRegex());
    console.log(newData);
    return newData;
  } catch (error) {
    console.log(error);
  }
};
