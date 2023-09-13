import express from "express";
import authRoutes from "./auth.router.js";
import conversationRoutes from "./conversation.router.js";
import messageRoute from "./message.route.js";
import userRoute from "./user.router.js";

const router = express.Router();
router.use("/auth", authRoutes);
router.use("/conversation", conversationRoutes);
router.use("/user", userRoute);
router.use("/message", messageRoute);

export default router;
