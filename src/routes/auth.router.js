import express from "express";
import { login, register } from "../controllers/auth.controller.js";
import { all } from "trim-request";

const authRouter = express.Router();

authRouter.post("/login", all, login);
authRouter.post("/register", all, register);

export default authRouter;
