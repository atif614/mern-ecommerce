import app from "./app.js";
import dotenv from "dotenv";
import {ConnectToDB} from "./config/db.js";
dotenv.config({path:"config/config.env"})
ConnectToDB();
// app.get("/products",getAllProducts);
// app.get("/product",SingleProduct);

app.listen(process.env.PORT,()=>{
    console.log(`server is running PORT = ${process.env.PORT}`)
})