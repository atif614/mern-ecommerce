import express from "express";
const router = express.Router();
import { loginUser, registerUser, logout,requestPasswordReset, getUserDetails, updatePassword, updateProfile } from "../controllers/userController.js";
import { verifyUserAuth } from "../middleware/userAuth.js";

router.route('/registerUser').post(registerUser);
router.route('/loginUser').post(loginUser);
router.route('/logout',).post(logout);
router.route('/forgot/password').post(requestPasswordReset);
router.route('/profile').get(verifyUserAuth,getUserDetails);
router.route('/password/update').post(verifyUserAuth,updatePassword);
router.route('/profile/update').put(verifyUserAuth,updateProfile);


export default router;