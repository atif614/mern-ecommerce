import Product from "../models/productModel.js";

export const createProduct=async(req,res)=>{
    console.log("First")
    const product = await Product.create(req.body);
    // console.log(req.body);
    console.log("second line");
    console.log(product)
    res.status(201).json({success:true,product});
}

export const getAllProducts = (req,res)=>{
    console.log(req.body)
    res.status(200).json({
        message:"App products"
    })
}

export const SingleProduct = (req,res)=>{
    res.status(200).json({
        message:"Single products"
    })
};