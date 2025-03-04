import handleAsyncError from "../middleware/handleAsyncError.js";
import User from "../models/userModel.js";
import { sendToken } from "../utils/jwtToken.js";
import HandleError from "../utils/handleError.js";
import bcrypt from "bcryptjs";


export const registerUser = handleAsyncError(async (req, res, next) => {
    const { name, email, password } = req.body;
    console.log(req.body);
    // return;
    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: "Temp ID",
            url: "Temp URL"
        }
    })
    // const token = user.getJWTToken();
    // console.log("token", token)
    //  res.status(200).json({
    //     success:true,
    //     user,
    //     token
    // })
    sendToken(user, 201, res);
})

// Login

export const loginUser = handleAsyncError(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new HandleError('Email or password cannot be empty', 400));
    }
    
    const user = await User.findOne({ email }).select('+password');
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);
    if (!user || !isMatch) {
        return next(new HandleError('Invalid Password or Email', 400));
    }
    // const token = user.getJWTToken();
    // console.log("token", token)
    // res.status(200).json({
    //     success: true,
    //     user,
    //     token
    // })
    sendToken(user, 201, res);
})

// LOGOUT 

export const logout = handleAsyncError(async(req,res,next)=>{
    console.log("req.cookie",req.cookie);
    console.log("res.cookie",res.cookie);
    res.cookie('token',null,{
        expires: new Date(Date.now()),
        httpOnly:true
    })
    res.status(200).json({
        success:true,
        message:"Successfully Logout"
    })
})

// Forgot Password Reset Link
export const requestPasswordReset = handleAsyncError(async(req,res,next)=>{
    const {email} = req.body;
    const user = await User.findOne({email});
    console.log("userbhia",user.generatePasswordResetToken());
    console.log("USerrrr",user);
    if(!email){
        return next(new HandleError('Email Field cannot be blank',400));
    }
    if(!user){
        return next(new HandleError("User doesn't exist",404)); 
    }
    let resetToken;
    try{
        resetToken = user.generatePasswordResetToken();
        await user.save({validateBeforeSave:false})
        console.log("resetToken",resetToken);
    }catch(error){
        console.log("Error",error);
        return next(new HandleError('Could not save reset token, please try again later',400));
    }
})