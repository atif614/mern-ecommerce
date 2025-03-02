import express from "express";
import { createProduct, deleteProduct, getAllProducts, getSingleProductDetails, UpdateProduct } from "../controllers/productController.js";
const router = express.Router();
import { verifyUserAuth } from "../middleware/userAuth.js";

router.route("/allProducts").get(verifyUserAuth,getAllProducts);
router.route("/createProduct").post(createProduct);
router.route("/updateProduct/:id").put(UpdateProduct);
router.route("/deleteProduct/:id").delete(deleteProduct);
router.route("/singleProduct/:id").get(getSingleProductDetails);

export default router;