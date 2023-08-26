import express from "express";

let configViewEngine = (app) => {
  //arrow function

  app.use(express.static("./src/public")); // de phia client su dung cung duong dan voi server
  app.set("view engine", "ejs"); // jsp, blade cho phep go logic trong HTML
  app.set("views", "./src/views"); //set duong link de den thu muc view
};

module.exports = configViewEngine;
