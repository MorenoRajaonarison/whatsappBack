import { sign, verify } from "./../utils/token.util.js";

export const generateToken = async (payload, expiresIn, secret) => {
  let token = await sign(payload, expiresIn, secret);
  return token;
};

export const verifyToken = async(refreshtoken, secret) => {
  let check = await verify(refreshtoken,secret)
  return check
}