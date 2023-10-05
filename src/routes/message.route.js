import express from "express";
import { all } from "trim-request";
import { postMessage, getMessages } from "../controllers/message.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", all, authMiddleware, postMessage);
router.get("/:convoId", all, authMiddleware, getMessages);

export default router;
