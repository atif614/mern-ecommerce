import handleASyncError from "../middleware/handleAsyncError.js";
import User from "../models/userModel.js"

export const registerUser = handleASyncError(async(req,res,next)=>{
    const {name,email,password}= req.body;
    console.log(req.body);
    const user = await User.create({
        name,
        email,
        password,
        avatar:{
            public_id:"Temp ID",
            url:"Temp URL"
        }
    })
    res.status(200).json({
        success:true,
        user
    })
})