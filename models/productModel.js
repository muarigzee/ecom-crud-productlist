import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    productName: String,
    productPrice: Number,
    currencyCode: String,
    numberOfSale: Number,
    rating: Number,
    isFreeShipping: Boolean,
    shopName: String,
    createdOn: {type: Date, default: Date.now},
});

const Product = mongoose.model('Product', productSchema)

export default Product;