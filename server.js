const express = require("express");
const connectDB = require("./src/config/db");

const transactionRoutes = require("./src/routes/transaction.routes");

const notFound = require("./src/middlewares/notFound");

const app = express();

app.use(express.json());

connectDB();

app.use("/transactions", transactionRoutes);

app.use(notFound);

app.listen(8000, () => {
  console.log("Server running on http://localhost:8000 🚀");
});