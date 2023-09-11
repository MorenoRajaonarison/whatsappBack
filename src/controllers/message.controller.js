import { updateLatestMsg } from "../services/conversation.service.js";
import { createMsg, populateMsg } from "../services/message.service.js";
import logger from "./../configs/logger.config.js";

export const postMessage = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const { message, convoId, files } = req.body;

    if (!convoId || (!message && !files)) {
      logger.error("Please provide a conversation id and a message body");
      return res.sendStatus(404);
    }

    const msgData = {
      sender: userId,
      message,
      conversation: convoId,
      files: files || [],
    };

    let newMsg = await createMsg(msgData);
    let populatedMsg = await populateMsg(newMsg._id);
    await updateLatestMsg(convoId, newMsg);
    res.json(populatedMsg);
  } catch (error) {
    next(error);
  }
};

export const getMessage = (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
