// moi khi vao 1 duong link cua website thi no se chay file nay dau tien

import express from "express";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", (req, res0) => {
    return res0.send("Hello world!");
  });
  return app.use("/", router); // ap phai bat dau bang dau gach cheo + api
};

module.exports = initWebRoutes;
