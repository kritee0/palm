import express from "express";
import { getMessage, totalmessage } from "../../contoller/message/mess.js";
export const messageRouter= express.Router();
messageRouter.get("/message",getMessage)
messageRouter.get("/totalMessage",totalmessage)
