const express = require("express");
const connectDB = require("./src/config/db");
const app =require('./app')
const transactionRoutes = require("./src/routes/transaction.routes");

const notFound = require("./src/middlewares/notFound");

connectDB();

app.use("/transactions", transactionRoutes);


app.listen(8000, () => {
  console.log("Server running on http://localhost:8000 🚀");
});