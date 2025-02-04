import app from "./app.js";
import dotenv from "dotenv";
import {ConnectToDB} from "./config/db.js";
dotenv.config({path:"config/config.env"})
ConnectToDB();
// app.get("/products",getAllProducts);
// app.get("/product",SingleProduct);

const server = app.listen(process.env.PORT,()=>{
    console.log(`server is running PORT = ${process.env.PORT}`);
})
process.on('unhandledRejection',(error)=>{
    console.log(`Error: ${error.message}`);
    console.log(`server is shutting down, due to unhandled promise rejections`);
    server.close(function(){
        process.exit(1);
    })
})