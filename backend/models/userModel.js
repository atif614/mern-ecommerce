import mongoose, { mongo } from "mongoose";
import validator from 'validator';
import bcryptjs from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken"
dotenv.config({path:"../config/config.env"});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        maxLength: [20, "Invalid Name . Please enter a name with less than 20 characters"],
        minLength: [3, "Name should contain more than 3 characters"]
    },
    email: {
        type: String,
        required: [true, "Please enter your Email"],
        unique: true,
        validator: [validator.isEmail, "Pleas enter a valid email"]
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
        select: false,

    },
    avatar: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    role: {
        type: String,
        defaut: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
})

// Password Hashing
userSchema.pre("save", async function (next) {
    console.log(this.password)
    this.password = await bcryptjs.hash(this.password, 10);
    if (!this.isModified("password")) {
        return next();
    }
})

// JWT Token
userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: '3d'
    });
}
 
export default mongoose.model('User', userSchema)