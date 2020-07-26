const express = require("express");
const app = express();
const getData = require("./functions/getData");
const inquirer = require("inquirer");
//settings
app.set("port", 4000);
//middlewares
inquirer
  .prompt([
    {
      name: "URL",
      message: "Write the url of u want",
      default: "https://github.com/"
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
