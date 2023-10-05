import createHttpError from "http-errors";
import logger from "../configs/logger.config.js";
import { searchUsers as searchUsersServices } from "../services/user.service.js";

export const searchUsers = async (req, res, next) => {
  try {
    const keyword = req.query.search;
    if (!keyword) {
      logger.error("Please add a search term first");
      throw createHttpError.BadRequest("Oops.. Something went wrong");
    }
    const users = await searchUsersServices(keyword, req.user.userId);
    res.json(users);
  } catch (error) {
    next(error);
  }
};
