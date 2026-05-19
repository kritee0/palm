import mongoose from "mongoose"

const UserSchemas=new mongoose.Schema({
  
  name:{
    type:String,
    required:true,
     match: [/^[A-Za-z\s]+$/, "Name must only contain alphabets"] 
  },
  email:{
    type:String,
    required:true,
     unique: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"] 

  },
  password:{
    type:String,
    required:true
  }

})
export default mongoose.model("User", UserSchemas);

