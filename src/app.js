import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import cookieParser from "cookie-parser";
import compression from "compression";
import fileUpload from "express-fileupload";
import cors from "cors";
import createHttpError from "http-errors";
import router from "./routes/index.js";

const app = express();

if (process.env.ENV !== "prod") {
  app.use(morgan("dev"));
}
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(mongoSanitize());
app.use(cookieParser());
app.use(compression());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.use(cors());

// api v1 router
app.use("/api/v1", router);

app.post("/test", (req, res) => {
  throw createHttpError.BadRequest("This route has an error");
});

app.use(async (req, res, next) => {
  next(createHttpError.NotFound("This route does not exist"));
});

// err handling
app.use(async (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

export default app;
