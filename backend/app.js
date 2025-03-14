// const express = require("express");
import express from "express";
import product from './routes/productRoutes.js';
import user from './routes/userRoutes.js';
import errorHandleMiddleware from "./middleware/error.js";
import cookieParser from "cookie-parser";

const app = express();
// module.exports = app;

// Middleware
app.use(express.json());
app.use(cookieParser());

// Route
app.use("/api/v1",product);
app.use("/api/v2",user);

app.use(errorHandleMiddleware)

export default app;