import express from "express";
import { getAllProducts } from "../controllers/productController.js";
import { SingleProduct } from "../controllers/productController.js";
const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/product").get(SingleProduct);

export default router;