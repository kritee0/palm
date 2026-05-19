import bcrypt from "bcryptjs";
import User from "../../module/auth/users.js";
import { generateToken } from "../../utils/generateToken.js";

export const loginProfile = async (req, res) => {
  try {
    const { email, password } = req.body;

    const foundUser = await User.findOne({ email });

    if (!foundUser) {
      return res.status(404).json({
        message: "Email does not exist",
      });
    }

    const matchPassword = await bcrypt.compare(
      password,
      foundUser.password
    );

    if (!matchPassword) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }
    const token = generateToken(foundUser._id);
    return res.status(200).json({
      message: "Login successful",
      token,
      user: foundUser,
    });

  } catch (error) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};





export const getProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: user,
    });

  } catch (error) {
    console.log("error on fetching profile", error);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};