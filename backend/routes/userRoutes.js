import express from "express";
const router = express.Router();
import { loginUser, registerUser, logout,requestPasswordReset, getUserDetails, updatePassword, updateProfile,getUserList,getSingleUser,updateUserRole,deleteUser } from "../controllers/userController.js";
import { roleBasedAccess, verifyUserAuth } from "../middleware/userAuth.js";

router.route('/registerUser').post(registerUser);
router.route('/loginUser').post(loginUser);
router.route('/logout',).post(logout);
router.route('/forgot/password').post(requestPasswordReset);
router.route('/profile').get(verifyUserAuth,getUserDetails);
router.route('/password/update').post(verifyUserAuth,updatePassword);
router.route('/profile/update').put(verifyUserAuth,updateProfile);
router.route('/admin/Getusers').get(verifyUserAuth,roleBasedAccess('admin'),getUserList);
router.route('/admin/users/:id').get(verifyUserAuth,roleBasedAccess('admin'),getSingleUser);
router.route('/admin/users/:id').put(verifyUserAuth,roleBasedAccess('admin'),updateUserRole);
router.route('/admin/users/:id').delete(verifyUserAuth,roleBasedAccess('admin'),deleteUser);

export default router;