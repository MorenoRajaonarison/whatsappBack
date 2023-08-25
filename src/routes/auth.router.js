import express from "express";
import {
  login,
  register,
  logout,
  refreshtoken,
} from "../controllers/auth.controller.js";
import { all } from "trim-request";
import authMiddleware from "../middlewares/auth.middleware.js";

const authRouter = express.Router();

authRouter.post("/login", all, login);
authRouter.post("/register", all, register);
authRouter.post("/logout", all, logout);
authRouter.post("/refreshtoken", all, refreshtoken);
authRouter.get("/testmiddleware", authMiddleware, (req, res) => {
  res.send(req.user);
});

export default authRouter;
