import bcrypt from "bcryptjs";
import db from "../models/index";

const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
  /*
  {
    email: 'hjhjhjhj1109vn@gmail.com',
    password: '',
    firstname: 'Ngô',
    lastname: 'Phát',
    phonenumber: '0832932980',
    gender: '1',
    roleId: '1'
  }
  */
  return new Promise(async (resolve, reject) => {
    try {
      let hashPasswordFromBcrypt = await hashUserPassword(data.password);
      await db.User.create({
        email: data.email,
        password: hashPasswordFromBcrypt,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phoneNumber: data.phoneNumber,
        gender: data.gender === "1" ? true : false,
        roleId: data.roleId,
      }); // insert into user
      resolve("Create a new user succeed!");
    } catch (e) {
      reject(e);
    }
  });
};

let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    // dung promise de dam bao ham luon tra ve ket qua, tranh viec bat dong do
    try {
      var hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};

let getAllUser = () => {
  return new Promise(async (resolve, reject) => {
    // dung promise de dam bao ham luôn đợi các hàm bên trong chạy xong rồi trả về kết quả, tranh viec bat dong do
    try {
      let users = await db.User.findAll({ raw: true });
      resolve(users);
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createNewUser: createNewUser,
  getAllUser: getAllUser,
};
