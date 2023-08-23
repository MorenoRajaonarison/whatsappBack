import express from "express";
import { login } from "../controllers/auth.controller.js";
import {all} from 'trim-request'

const authRouter = express.Router();

authRouter.post("/login",all, login);

export default authRouter;
