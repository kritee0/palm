import jwt from "jsonwebtoken"
 export  const authMiddleware=async(req,res,next)=>{
    try{
        const token=req.headers.authorization;
        if(!token){

        
            res.json({
                message:"no token provided"
            })
            
        }
        const decoded= jwt.verify( token,  process.env.JWT_SECRET_KEY)
        req.User=decoded;
        next()
        
        

    }catch(error){
         return res.status(401).json({
            message:"   invalidtoken"
        })
        console.log("invalid token",error)
    }

 }