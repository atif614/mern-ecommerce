import express from "express";
import { createProduct, getAllProducts, UpdateProduct } from "../controllers/productController.js";
import { SingleProduct } from "../controllers/productController.js";
const router = express.Router();

router.route("/allProducts").get(getAllProducts);
router.route("/product").get(SingleProduct);
router.route("/createProduct").post(createProduct);
router.route("/updateProduct/:id").put(UpdateProduct);

export default router;