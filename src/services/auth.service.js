import createHttpError from "http-errors";
import validator from "validator";
import { UserModel } from "./../models/index.js";
import bcrypt from "bcrypt";

//env varaibles
const { DEFAULT_USER_PROFILE_IMG, DEFAULT_STATUS } = process.env;

export const createUser = async (userData) => {
  const { name, email, picture, status, password } = userData;
  // check if fields ar empty
  if (!name && !email && !password) {
    throw createHttpError.BadRequest("Please fill all fields");
  }

  // check name length
  if (!validator.isLength(name, { min: 2, max: 16 })) {
    throw createHttpError.BadRequest(
      "Please make sure your name is between 2 and 16 charaters"
    );
  }

  //check status length
  if (status && status.length < 64) {
    throw createHttpError.BadRequest(
      "Please make sure your status is less than 64 charaters"
    );
  }

  // check if email address is valid
  if (!validator.isEmail(email)) {
    throw createHttpError.BadRequest("Please fill a valid email address");
  }

  // check if user already exist
  if (await UserModel.findOne({ email })) {
    throw createHttpError.Conflict(
      "Please try again with a different email address, this email already exist"
    );
  }

  //check password length
  if (!validator.isLength(password, { min: 6, max: 128 })) {
    throw createHttpError.BadRequest(
      "Please make sure your password is between 6 and 128 charaters"
    );
  }

  const user = await new UserModel({
    ...userData,
    picture: picture || DEFAULT_USER_PROFILE_IMG,
    status: status || DEFAULT_STATUS,
  }).save();
  return user;
};

export const signUser = async (email, password) => {
  const user = await UserModel.findOne({ email: email.toLowerCase() }).lean();

  //check if user exist
  if (!user) throw createHttpError.NotFound("This user is not exist.");

  //compare the password
  let passwordMatches = await bcrypt.compare(password, user.password);
  if (!passwordMatches)
    throw createHttpError.NotFound("The password is incorrect");
  return user;
};
