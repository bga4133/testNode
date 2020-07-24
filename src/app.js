const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");
const inquirer = require("inquirer");
const urlRegex = require("url-regex");
//settings
app.set("port", 4000);

//middlewares
app.use(cors());
app.use(express.json());

getData = async URL => {
  try {
    const res = await axios.get(URL);
    const resp = new Object(res);
    const data = Object.entries(resp);
    const newData = data.join().match(urlRegex());
    console.log(newData);
  } catch (error) {
    console.log(error);
  }
};
inquirer
  .prompt([
    {
      name: "URL",
      message: "Write the url of u want",
      default: "red"
    },
    {
      name: "NAME",
      message: "NEXT QUESTION",
      default: "red"
    }
  ])
  .then(answers => {
    const { URL } = answers;
    let regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if (regexp.test(URL)) {
      getData(URL);
      return URL;
    } else {
      console.log("write a good url plis");
    }
  });

//export app
module.exports = app;
