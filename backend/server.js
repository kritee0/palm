import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";

import { database } from "./config/db.js";
import { router } from "./routes/auth/users.js";
import { profileRouter } from "./routes/auth/profile.js";
import { messageRouter } from "./routes/auth/meesage.js";
import message from "./module/auth/message.js";

const app = express();
dotenv.config();

const PORT = 4000;


database();


app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());


const server = http.createServer(app);


const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});


io.on("connection", (socket) => {

  console.log("user connected", socket.id);


  io.emit("user-joined", {
    message: "A new user joined"
  });

 
  socket.on("sendMessage", async (data) => {

    try {

      console.log("message received", data);

    
      const savedMessage = await Message.create({
        text: data.text,
        user: data.user
      });

     
      io.emit("receiveMessage", savedMessage);

    } catch (error) {
      console.log("Error saving message:", error);
    }
  });

  
  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });

});


app.use("/api", router);
app.use("/api", profileRouter);
app.use("/api", messageRouter);

app.get("/palmid", (req, res) => {
  res.json({
    success: true,
    message: "this is testing route"
  });
});

server.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});



