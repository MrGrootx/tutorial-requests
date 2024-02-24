import express from "express";
import rootRouter from "./routers/main.js";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

const server = express();
const SERVER_PORT = 8888;
dotenv.config();

server.use(express.json());
server.use(rootRouter);

rootRouter.get("*", (req, res) => {
  return res.json({
    success: false,
    message: "Empty here! Go and get a life!",
  });
});

server.listen(SERVER_PORT, () => {
  console.log(`Server is running on: http://localhost:${SERVER_PORT}`);
});

if (process.env.MONGODB_URL) {
  try {
    mongoose.connect(process.env.MONGODB_URL);
  } catch (error) {
    console.log("Error FROM mongoDB", error);
  }
} else {
  console.error("ENV is not set!");
}
