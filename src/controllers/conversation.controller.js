import createHttpError from "http-errors"
import logger from "../configs/logger.config.js"
import { doesConversationExist } from "../services/conversation.service.js"

export const createOrOpenConversation = async (req, res, next) => {
  try {
    const senderId = req.user.userId
    const {receiverId} = req.body

    // check if receiverId is provide
    if(!receiverId) {
      logger.error('Please provide the user id you wanna start a conversation with !')
      throw createHttpError.BadGateway('Something went wrong !')
    }

    // check if chat exist
    const existedConversation = await doesConversationExist(senderId, receiverId)
  } catch (error) {
    next(error)
  }
}