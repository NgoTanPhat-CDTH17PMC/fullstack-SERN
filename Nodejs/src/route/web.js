// moi khi vao 1 duong link cua website thi no se chay file nay dau tien

import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/about", homeController.getAboutPage);
  router.get("/crud", homeController.getCRUD);

  router.post("/post-crud", homeController.postCRUD);
  router.get("/get-crud", homeController.displayGetCRUD);
  //rest api là dùng theo chuẩn get, post , put, ....

  return app.use("/", router); // ap phai bat dau bang dau gach cheo + api
};

module.exports = initWebRoutes;
