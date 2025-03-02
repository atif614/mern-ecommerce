import handleAsyncError from "../middleware/handleAsyncError.js";
import HandleError from "../utils/handleError.js";
import JWT from "jsonwebtoken";
import User from "../models/userModel.js";

export const verifyUserAuth = handleAsyncError(async (req, res, next) => {
    const { token } = req.cookies;
    console.log(token);
    if (!token) {
        return next(new HandleError('Authentication is missing ! Please login continue... ', 400))
    }
    const decodedData = JWT.verify(token,process.env.JWT_SECRET_KEY);
    console.log(decodedData);
    req.user = await User.findById(decodedData.id);
    console.log("---------------------------------------->",req.user)
    next();
})