// config/db.ts
import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined in the environment variables");
  }

  try {
    console.log("Attempting to connect to MongoDB...");
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error(`MongoDB connection failed: ${(error as Error).message}`);
  }
};

export default connectDB;
