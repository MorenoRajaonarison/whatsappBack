export const login = async (req, res, next) => {
  try {
    res.send("from route and controller");
  } catch (error) {
    next(error);
  }
};
