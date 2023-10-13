import express from "express";
import { all } from "trim-request";
import authMiddleware from "../middlewares/auth.middleware.js";
import {
  createGrp,
  createOrOpenConversation,
  getConversation,
} from "../controllers/conversation.controller.js";

const router = express.Router();

router.post("/", all, authMiddleware, createOrOpenConversation);
router.get("/", all, authMiddleware, getConversation);
router.post("/group", all, authMiddleware, createGrp);

export default router;
