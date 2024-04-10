// lib/mongoose.ts
import mongoose from "mongoose";

const uri = process.env.MONGODB_URI as string;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

let mongooseClient = mongoose.connect(uri);

export default mongooseClient;
