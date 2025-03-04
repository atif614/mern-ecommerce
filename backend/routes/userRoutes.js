import express from "express";
const router = express.Router();
import { loginUser, registerUser, logout,requestPasswordReset } from "../controllers/userController.js";

router.route('/registerUser').post(registerUser);
router.route('/loginUser').post(loginUser);
router.route('/logout',).post(logout);
router.route('/forgot/password').post(requestPasswordReset);

export default router;