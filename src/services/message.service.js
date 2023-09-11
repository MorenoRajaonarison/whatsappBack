import createHttpError from "http-errors";
import {MessageModel} from "../models/index.js";

export const createMsg = async (data) => {
  let newMsg = await MessageModel.create(data);
  if (!newMsg) throw createHttpError.BadRequest("Oops.. Something went wrong");
  return newMsg;
};

export const populateMsg = async (id) => {
  let msg = await MessageModel.findById(id)
    .populate({
      path: "sender",
      select: "name picture",
      model: "UserModel",
    })
    .populate({
      path: "conversation",
      select: "name isGroup users",
      model: "ConversationModel",
      populate: {
        path: "users",
        select: "name email picture status",
        model: "UserModel",
      },
    });
  if (!msg) throw createHttpError.BadRequest("Oops.. Something went wrong");
  return msg;
};
