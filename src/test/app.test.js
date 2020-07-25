// const app = require("app");
const axios = require("axios");
// const getData = require("app");

describe("Test the app", () => {
  const URL = "https://github.com/bga4133/";
  test("should be return the data of URL", async () => {
    try {
      const res = await axios.get(URL);
      const resp = new Object(res);
      const data = Object.entries(resp);
      const newData = data.join().match(urlRegex());
      console.log(newData);
      expect(newData.url).toEqual(URL);
      return newData;
    } catch (error) {
      console.log(error);
    }
  });
});
