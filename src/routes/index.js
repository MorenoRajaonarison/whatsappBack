import express from "express";
import authRoutes from "./auth.router.js";
import conversationRoutes from "./conversation.router.js";

const router = express.Router();
router.use("/auth", authRoutes);
router.use("/conversation", conversationRoutes);

export default router;
