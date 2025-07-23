import express from "express";
import {
    getAllProducts,
    getProductById,
    addProduct,
    deleteProduct,
    updateProduct
} from "../controllers/productController.js";

const router = express.Router();

router.get("/products", getAllProducts);
router.get("/product/:id", getProductById);
router.post("/product", addProduct);
router.delete("/product/:id", deleteProduct);
router.put("/product/:id", updateProduct);

export default router;