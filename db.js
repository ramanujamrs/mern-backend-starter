import mongoose from "mongoose";
import dotenv from "dotenv/config";
import logger from "./logger.js";

const db = mongoose.connection;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    logger.log("info", "DB connected");
  })
  .catch((error) => {
    logger.log("error", error);
  });

export default db;
