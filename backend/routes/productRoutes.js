import express from "express";
import { createProduct, getAllProducts } from "../controllers/productController.js";
import { SingleProduct } from "../controllers/productController.js";
const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/product").get(SingleProduct);
router.route("/createProduct").post(createProduct)

export default router;