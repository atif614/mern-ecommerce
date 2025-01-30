import Product from "../models/productModel.js";

export const createProduct = async (req, res) => {
    console.log("First")
    const product = await Product.create(req.body);
    // console.log(req.body);
    console.log("second line");
    console.log(product)
    res.status(201).json({ success: true, product });
}

export const getAllProducts = async (req, res) => {
    const products = await Product.find();
    res.status(200).json({ success: true, products })
}

export const SingleProduct = (req, res) => {
    res.status(200).json({
        message: "Single products"
    })
};

export const UpdateProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(500).json({ message: "Product Not Found" })
    }
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    })
    res.status(200).json({
        success:true,
        product
    })
};