import express from "express";
import { login, register, logout, refreshtoken } from "../controllers/auth.controller.js";
import { all } from "trim-request";

const authRouter = express.Router();

authRouter.post("/login", all, login);
authRouter.post("/register", all, register);
authRouter.post("/logout", all, logout)
authRouter.post("/refreshtoken", all, refreshtoken)

export default authRouter;
