import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const msgSchema = mongoose.Schema(
  {
    sender: {
      type: ObjectId,
      ref: "UserModel",
    },
    message: {
      type: String,
      trim: true,
    },
    conversation: {
      type: ObjectId,
      ref: "ConversationModel",
    },
    files: [],
  },
  { collection: "messages", timestamps: true }
);

const MessageModel = mongoose.models.MessageModel || mongoose.model('MessageModel', msgSchema)

export default MessageModel