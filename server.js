const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require('./app')

dotenv.config({ path: './config.env' });

mongoose.connect(process.env.DB_CONNECT)
  .then(() => {
    console.log("DB connection successful");
  });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`the server running on the port ${port}`);
});