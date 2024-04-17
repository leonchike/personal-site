// models/pageVisit.ts
import mongoose, { Document, Model, Schema } from "mongoose";

export interface IUser extends Document {
  email: string;
}

const userSchema: Schema = new Schema({
  email: { type: String, required: true },
});

export const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);
