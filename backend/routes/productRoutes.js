import express from "express";
import { createProduct, deleteProduct, getAllProducts, getSingleProductDetails, UpdateProduct,getAdminProducts } from "../controllers/productController.js";
const router = express.Router();
import { verifyUserAuth,roleBasedAccess } from "../middleware/userAuth.js";

// router.route("/allProducts").get(verifyUserAuth,getAllProducts);
router.route("/allProducts").get(getAllProducts);
router.route("/admin/allProducts").get(verifyUserAuth,roleBasedAccess('admin'),getAdminProducts);
router.route("admin/createProduct").post(verifyUserAuth,roleBasedAccess('admin'),createProduct);
router.route("admin/updateProduct/:id").put(verifyUserAuth,roleBasedAccess('admin'),UpdateProduct);
router.route("admin/deleteProduct/:id").delete(verifyUserAuth,roleBasedAccess('admin'),deleteProduct);
// router.route("/singleProduct/:id").get(verifyUserAuth,getSingleProductDetails);
router.route("/singleProduct/:id").get(getSingleProductDetails);

export default router;