import app from "./app.js";
import dotenv from "dotenv";
dotenv.config({path:"config/config.env"})

app.get("/products",getAllProducts);
app.get("/product",SingleProduct);

app.listen(process.env.PORT,()=>{
    console.log(`server is running PORT = ${process.env.PORT}`)
})