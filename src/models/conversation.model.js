import mongoose, { Schema, model } from "mongoose";

const { ObjectId } = Schema.Types;

const ConversationSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Conversation is required"],
      trim: true,
    },
    isGroup: {
      type: Boolean,
      required: true,
      default: false,
    },
    users: [
      {
        type: ObjectId,
        ref: "UserModel",
      },
    ],
    latestMessage: {
      type: ObjectId,
      ref: "MessageModel",
    },
    admin: {
      type: ObjectId,
      ref: "UserModel",
    },
  },
  {
    collection: "conversations",
    timestamps: true,
  }
);

const ConversationModel =
  mongoose.models.ConversationModel ||
  model("ConversationModel", ConversationSchema);
export default ConversationModel;
