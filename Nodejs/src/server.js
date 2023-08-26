//dung de chay duoc server
import express from "express";
import bodyParser from "body-parser"; // ho tro lay tham so ma Client truyen len
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";

require("dotenv").config(); // giup chung ta chay process.env

let app = express();

// config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app); // khai bao background

connectDB();

let port = process.env.PORT || 6969; // lay PORT trong file .env
app.listen(port, () => {
  // tra ve callback function sau khji chayj thanh cong

  console.log("Backend NodeJs is running on the port :" + port);
});
