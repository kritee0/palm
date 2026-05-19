

import Message from "../../module/auth/message.js";
 export const getMessage = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      data: messages,
      
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error detected",
    });
  }
};


export const totalmessage=async(req,res)=>{

    try{

           const totalNumber=await Message .countDocuments() 
           return res.json({
            success:true,
            message:"data fetched successfully",
            data:totalNumber
           })


    }
     catch(error){
return res.status(500).json({
    success:false,
    message: "error on counting total user"

})

    
        
     }

 



} 