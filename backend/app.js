// const express = require("express");
import express from "express";
import product from './routes/productRoutes.js';
const app = express();
// module.exports = app;

// Route
app.use("/api/v1",product);

export default app;