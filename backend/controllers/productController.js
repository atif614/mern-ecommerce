

export const getAllProducts = (req,res)=>{
    res.status(200).json({
        message:"App products"
    })
}

export const SingleProduct = (req,res)=>{
    res.status(200).json({
        message:"Single products"
    })
};