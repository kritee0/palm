import jwt from "jsonwebtoken";
import users from "../module/auth/users.js";

export const generateToken = (user) => {
  try {
    return jwt.sign(
      { _id: user._id }, 
      process.env.JWT_SECRET_KEY,
      { expiresIn: "7d" }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const decodeJWT = async (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (!decoded?._id) {
      return null;
    }
    

    const foundUser = await UserModel.findById(decoded._id);
    return foundUser;
  } catch (error) {
    console.log("JWT Decode error:", error);
    return null;
  }
};