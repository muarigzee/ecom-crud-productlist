import Product from "../models/productModel.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.send({message:"All products",data:products});
    } catch (e) {
        console.error(e);
        res.status(500).send({ message: "Error getting products" });
    }
};

export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.send({ message: "Product found", data: product });
    } catch (e) {
        res.status(500).send({ message: "Error getting product" });
    }
};

export const addProduct = async (req, res) => {
    const body = req.body;

    if (
        !body.productName ||
        !body.productPrice ||
        !body.currencyCode ||
        !body.numberOfSale ||
        !body.rating ||
        !body.isFreeShipping ||
        !body.shopName
    ) {
        return res.status(400).send({ message: "Missing required fields" });
    }

    try {
        await Product.create(body);
        res.send({ message: "Product added" });
    } catch (e) {
        res.status(500).send({ message: "Error saving product" });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.send({ message: "Product deleted" });
    } catch (e) {
        res.status(500).send({ message: "Error deleting product" });
    }
};

export const updateProduct = async (req, res) => {
    try {
        await Product.findByIdAndUpdate(req.params.id, req.body);
        res.send({ message: "Product updated" });
    } catch (e) {
        res.status(500).send({ message: "Error updating product" });
    }
};