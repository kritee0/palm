

import express from "express"
import { deleteUser, getUser, getUserByID, registerUser, totalUser, updateUser } from "../../contoller/Authentication/Register.js";
 export const router=  express.Router();
router .get("/allusers",getUser);
router.get("/:id",getUserByID)
router.get("/totalUser",totalUser)
router.post("/registeruser",registerUser)
router.put("/updateUser",updateUser)
router.delete("/deleteUser",deleteUser)


