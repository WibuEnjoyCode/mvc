import express from "express";
import { GetAllUsers, GetUserById } from "../controllers/User.controller.js";

const routerUser = express.Router();

routerUser.get("/user", GetAllUsers);
routerUser.get("/user/:id", GetUserById);

export { routerUser };
