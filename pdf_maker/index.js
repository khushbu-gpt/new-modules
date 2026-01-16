import express from "express";
import { configDotenv } from "dotenv";
import mongoose from "mongoose";
const server = express();
const PORT = 3333;
configDotenv();

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("mongoose is connected");
//     server.listen(PORT, () => {
//       console.log(PORT);
//     });
//   })
//   .catch((err) => {
//     console.log("mongoose connection failed", err);
//   });

server.get("/",(req,res)=>{
    res.send("hello khushbu is here!")
})
async function startServer(params) {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("mongoose is connected");
    server.listen(PORT, () => {
      console.log(PORT);
    });
  } catch (err) {
    console.log("mongoose connection failed", err);
  }
}

startServer();
