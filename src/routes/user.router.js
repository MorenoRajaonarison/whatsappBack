import express from "express";
import { searchUsers } from "../controllers/user.controller.js";
import { all } from "trim-request";
import authMiddleware from "../middlewares/auth.middleware.js";

const userRouter = express.Router();

userRouter.get("/", authMiddleware, all, searchUsers);

export default userRouter;
