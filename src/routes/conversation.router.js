import express from "express";
import { all } from "trim-request";
import authMiddleware from "../middlewares/auth.middleware.js";
import { createOrOpenConversation } from "../controllers/conversation.controller.js";

const router = express.Router();

router.post("/", all, authMiddleware, createOrOpenConversation);

export default router;
