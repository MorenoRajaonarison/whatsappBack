import logger from "./../configs/logger.config.js";
import jwt from "jsonwebtoken";

export const sign = async (payload, expiresIn, secret) => {
  return new Promise((res, rej) => {
    jwt.sign(payload, secret, { expiresIn }, (error, token) => {
      if (error) {
        logger.error(error);
        rej(error);
      } else {
        res(token);
      }
    });
  });
};

export const verify = async (token, secret) => {
  return new Promise((res, rej) => {
    jwt.verify(token, secret, (error, payload) => {
      if (error) {
        logger.error(error);
        res(null);
      } else {
        res(payload);
      }
    });
  });
};
