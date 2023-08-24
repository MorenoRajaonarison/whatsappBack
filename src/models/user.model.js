import { Schema, model } from "mongoose";
import validator from "validator";

const userSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide your name"],
    },
    email: {
      type: String,
      required: [true, "Please provide your email address"],
      unique: [true, "This email address alerady exist"],
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    picture: {
      type: String,
      default:
        "https://res.cloudinary.com/dkd5jblv5/image/upload/v1675976806/Default_ProfilePicture_gjngnb.png",
    },
    status: {
      type: String,
      default: "Whatsapp user",
    },
    name: {
      type: String,
      required: [true, "Please provide your password"],
      minLength: [
        6,
        "Please make sure your password is atleast 6 charaters long",
      ],
      maxLength: [
        128,
        "Please make sure your password is less than 128 charaters long",
      ],
    },
  },
  {
    collection: "users",
    timestamps: true,
  }
);
const UserModel = model("UserModel", userSchema);
export default UserModel;
