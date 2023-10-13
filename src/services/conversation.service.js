import { ConversationModel, UserModel } from "../models/index.js";
import createHttpError from "http-errors";

export const doesConversationExist = async (
  senderId,
  receiverId,
  isGroup,
  convoId
) => {
  if (isGroup == false) {
    let convos = await ConversationModel.find({
      isGroup: false,
      $and: [
        { users: { $elemMatch: { $eq: senderId } } },
        { users: { $elemMatch: { $eq: receiverId } } },
      ],
    })
      .populate("users", "-password")
      .populate("latestMessage");

    if (!convos)
      throw createHttpError.BadRequest("Oops... Something went wrong !");

    // populate message model

    convos = await UserModel.populate(convos, {
      path: "latestMessage.sender",
      select: "name email picture status",
    });
    return convos[0];
  } else {
    // it's a grp chat
    let convo = await ConversationModel.findOne({ _id: convoId })
      .populate("users admin", "-password")
      .populate("latestMessage");

    if (!convo)
      throw createHttpError.BadRequest("Oops... Something went wrong !");

    // // populate message model

    // convo = await UserModel.populate(convo, {
    //   path: "latestMessage.sender",
    //   select: "name email picture status",
    // });
    console.log({ convo });
    return convo;
  }
};

export const createConversation = async (data) => {
  const newConvo = await ConversationModel.create(data);
  if (!newConvo)
    throw createHttpError.BadRequest("Oops... Something went wrong !");
  return newConvo;
};

export const populateConvo = async (id, fieldToPopulate, fieldToRemove) => {
  const populatedConvo = await ConversationModel.findOne({ _id: id }).populate(
    fieldToPopulate,
    fieldToRemove
  );
  if (!populatedConvo)
    throw createHttpError.BadRequest("Oops... Something went wrong !");
  return populatedConvo;
};

export const getConversations = async (userId) => {
  let conversations;
  await ConversationModel.find({ users: { $elemMatch: { $eq: userId } } })
    .populate("users", "-password")
    .populate("admin", "-password")
    .populate("latestMessage")
    .sort({ updatedAt: -1 })
    .then(async (results) => {
      results = await UserModel.populate(results, {
        path: "latestMessage.sender",
        select: "name email picture status",
      });
      conversations = results;
    })
    .catch((error) => {
      throw createHttpError.BadRequest("Oops... Something went wrong !");
    });
  return conversations;
};

export const updateLatestMsg = async (convoId, message) => {
  const updatedConvo = await ConversationModel.findByIdAndUpdate(convoId, {
    latestMessage: message,
  });
  if (!updatedConvo)
    throw createHttpError.BadRequest("Oops... Something went wrong !");

  return updatedConvo;
};
