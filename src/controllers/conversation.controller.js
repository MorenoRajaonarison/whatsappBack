import createHttpError from "http-errors";
import logger from "../configs/logger.config.js";
import {
  createConversation,
  doesConversationExist,
} from "../services/conversation.service.js";
import { findUser } from "../services/user.service.js";

export const createOrOpenConversation = async (req, res, next) => {
  try {
    const senderId = req.user.userId;
    const { receiverId } = req.body;

    // check if receiverId is provide
    if (!receiverId) {
      logger.error(
        "Please provide the user id you wanna start a conversation with !"
      );
      throw createHttpError.BadGateway("Oops... Something went wrong !");
    }

    // check if chat exist
    const existedConversation = await doesConversationExist(
      senderId,
      receiverId
    );

    if (existedConversation) {
      res.json(existedConversation);
    } else {
      let receiverUser = await findUser(receiverId);
      let convoData = {
        name: receiverUser.name,
        isGroup: false,
        users: [senderId, receiverId],
      };
      const newConvo = await createConversation(convoData);
      const populatedConvo = await populateConvo(
        newConvo._id,
        "users",
        "-password"
      );
      res.status(200).json(populatedConvo);
    }
  } catch (error) {
    next(error);
  }
};
