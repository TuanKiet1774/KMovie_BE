// const connectDB = async () => {
//   const mongoose = require("mongoose");
//   try {
//     console.log("⏳ Connecting to MongoDB...");
//     await mongoose.connect(process.env.MONGO_URI, {
//       serverSelectionTimeoutMS: 5000,
//     });
//     console.log("✅ Connected to MongoDB Atlas");
//   } catch (err) {
//     console.error("❌ MongoDB Atlas connection error:", err.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;
const mongoose = require("mongoose");

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not defined");
  }

  console.log("⏳ Connecting to MongoDB...");

  await mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 5000,
    maxPoolSize: 10,
  });

  console.log("✅ Connected to MongoDB Atlas");

  return mongoose.connection;
};

module.exports = connectDB;
