import express from "express";
import { getProfile, loginProfile } from "../../contoller/Authentication/Login.js";
import { authMiddleware } from "../../middleware/auth/authMiddleware.js";
  export const profileRouter=express.Router()
  profileRouter.get("/fetchProfile",authMiddleware,getProfile)
  profileRouter.post("/login", loginProfile)