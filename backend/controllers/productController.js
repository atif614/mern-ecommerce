import handleAsyncError from "../middleware/handleAsyncError.js";
import productModel from "../models/productModel.js";
import Product from "../models/productModel.js";
import APIFunctionality from "../utils/apiFunctionality.js";
import HandleError from "../utils/handleError.js";

export const createProduct = handleAsyncError( async (req, res) => {
    console.log("Before Request body",req.body);
    req.body.user = req.user.id;
    console.log("Before Request body",req.body);
    const product = await Product.create(req.body);
    // console.log(req.body);
    console.log("second line");
    console.log(product)
    res.status(201).json({ success: true, product });
})

export const getAllProducts = async (req, res) => {
    const resultsPerPage = 3;
    const APIFeatures =  new APIFunctionality(Product.find(),req.query).search().filter();
    const filteredQuery = APIFeatures.query.clone();
    const productCount = await filteredQuery.countDocuments();

    // const products = await Product.find();
    const products = await APIFeatures.query;
    const totalPages = Math.ceil(productCount/resultsPerPage);
    res.status(200).json({ success: true, products, productCount,totalPages })
}

export const UpdateProduct = async (req, res,next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        // return res.status(500).json({ message: "Product Not Found" });
        return next(new HandleError("Product not found",404));
    }
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
    res.status(200).json({
        success: true,
        product
    })
};


// Delete Product
export const deleteProduct = async (req, res,next) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
        // return res.status(500).json({
        //     message: "Product Not Found"
        // })
        return next(new HandleError("Product not found",404));
    }
    res.status(200).json({
        success: true,
        message: "Product Deleted Successfully"
    })
}

// Accessing Single Product
export const getSingleProductDetails = async (req, res,next) => {
    console.log(req.params)
    const product = await Product.findById(req.params.id);
    if (!product) {
        // return res.status(500).json({
        //     message: "Product Not Found"
        // })
        return next(new HandleError("Product not found",404));
    }
    res.status(200).json({
        success: true,
        product
    })
}

