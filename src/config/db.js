// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect("mongodb://localhost:27017/ExponceTracker");
//     console.log("MongoDB connected ✅");
//   } catch (error) {
//     console.log("DB connection error ❌");
//   }
// };

// module.exports = connectDB;
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/ExpenseTracker");
    console.log("MongoDB connected ✅");
  } catch (error) {
    console.error("DB connection error ❌", error.message);
  }
};

module.exports = connectDB;