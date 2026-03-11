const express = require("express");
const connectDB = require("./src/config/db.js");

const transactionRoutes = require("./src/routes/transaction.routes.js");

const notFound = require("./src/middlewares/notFound.js");

const app = express();

app.use(express.json());

connectDB();

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "API is healthy",
  });
});

app.use("/transactions", transactionRoutes);


app.listen(3030, () => {
  console.log("Server running on http://localhost:3030 🚀");
});