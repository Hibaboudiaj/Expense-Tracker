const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/expanseTracker");
    console.log("MongoDB connected ✅");
  } catch (error) {
    console.error("DB connection error ❌", error.message);
  }
};

module.exports = connectDB;