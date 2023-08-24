import { createUser } from "../services/auth.service.js";

export const login = async (req, res, next) => {
  try {
    res.send("from route and controller");
  } catch (error) {
    next(error);
  }
};

export const register = async (req, res, next) => {
  try {
    const { name, email, picture, status, password } = req.body;
    const newUser = await createUser({
      name,
      email,
      picture,
      status,
      password,
    });
    res.json(newUser);
  } catch (error) {
    next(error);
  }
};
