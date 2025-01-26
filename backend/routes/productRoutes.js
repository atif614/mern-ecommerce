import express from "express";
import { getAllProducts } from "../controllers/productController.js";
import { SingleProduct } from "../controllers/productController.js";
const router = express.Router();

router.get("/products",getAllProducts);
router.get("/product",SingleProduct);

export default router;