import express from "express";
import { PORT } from "./config.js";
import logger from "./logger.js";
import dotenv from "dotenv/config";

const app = express();
//dotenv.config();

app.get("/", (request, response) => {
  logger.log(request);
  response.status(230).send("Message sent");
});

app.listen(PORT, () => {
  logger.log("info", `Listening on port: ${PORT} ${process.env.NODE_ENV}`);
});
