import message from "../../module/auth/message.js";
import  User from "../../module/auth/users.js";
import bcrypt from "bcryptjs";
 export const sendResponse = (
  res,
  status,
  success,
  message,
  data = null
) => {
  return res.status(status).json({
    success,
    message,
    data,
  });
};

export const registerUser = async (
  req,
  res
) => {

  try {

    const {
      name,
      email,
      password,
    } = req.body;

   
    const existingUser =
      await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json("User already exists");
    }


    const hashedPassword =
      await bcrypt.hash(password, 10);

 
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User Registered",
      user,
    });

  } catch (error) {

    res.status(500).json(
      error.message
    );
  }
};


 

export const getUser = async (req, res) => {
  try {
    const users = await User.find();

    console.log("users fetched successfully");

    return res.json({
      success: true,
      data: users,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
};
export const getUserByID = async (req, res) => {
  try {
    const { id } = req.params;

    const foundUser = await User.findById(id);

    if (!foundUser) {
      return res.status(404).json({
        success: false,
        message: "User does not exist",
      });
    }

    return res.status(200).json({
      success: true,
      data: foundUser,
      message: "User found successfully",
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
  export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


 export const totalUser=async(req,res)=>{
  try{
  const user = await User.countDocuments()
    return res.status(200) .json({
      success:true,
      message:"user fetch successfully",
      data:user
    })

  }catch(error){
    res.status(500).json({
      success:false,
      message:"something went wrong"
    })

  }

}
