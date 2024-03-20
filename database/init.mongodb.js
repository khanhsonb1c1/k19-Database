
// Test
const connectString = "mongodb://localhost:27017"


const mongoose = require("mongoose");


// Connect to MongoDB
mongoose
  .connect(connectString)
  .then(() => console.log("Kết nối thành công đến MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

module.exports = mongoose;
