import express from "express";
import { createProduct, deleteProduct, getAllProducts, getSingleProductDetails, UpdateProduct } from "../controllers/productController.js";
const router = express.Router();
import { verifyUserAuth,roleBasedAccess } from "../middleware/userAuth.js";

router.route("/allProducts").get(verifyUserAuth,getAllProducts);
router.route("/createProduct").post(verifyUserAuth,roleBasedAccess('admin'),createProduct);
router.route("/updateProduct/:id").put(verifyUserAuth,roleBasedAccess('admin'),UpdateProduct);
router.route("/deleteProduct/:id").delete(verifyUserAuth,roleBasedAccess('admin'),deleteProduct);
router.route("/singleProduct/:id").get(verifyUserAuth,getSingleProductDetails);

export default router;