import app from "./app.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import logger from "./configs/logger.config.js";

// env variables
dotenv.config();
const { DB_URL, ENV, PORT = 8080 } = process.env;

// exit on mongodb err
mongoose.connection.on("error", (err) => {
  logger.error(`Mongo error: ${err}`);
  process.exit(1);
});

if (ENV !== "prod") {
  mongoose.set("debug", true);
}

// db connexion
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    logger.info("DB connexion successfully ");
  });

// start server
const server = app.listen(PORT, () => {
  logger.info(` Server listening at ${PORT} ...`);
});

// handle server error
const exitHandler = () => {
  if (server) {
    logger.info("Server closed");
    process.exit(1);
  } else {
    process.exit(1);
  }
};

const unexpectedErrHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on("uncaughtException", unexpectedErrHandler);
process.on("unhandledRejection", unexpectedErrHandler);

// SIGTERM
process.on("SIGTERM", () => exitHandler());
