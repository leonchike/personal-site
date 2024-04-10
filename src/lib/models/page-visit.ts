// models/pageVisit.ts
import mongoose, { Document, Model, Schema } from "mongoose";

export interface IPageVisit extends Document {
  pathname: string;
  timestamp: Date;
  ipAddress: string;
  location: {
    city: string;
    state_prov: string;
    country: string;
    zipcode: string;
    lat: number;
    lon: number;
  };
}

const pageVisitSchema: Schema = new Schema({
  pathname: { type: String, required: true },
  timestamp: { type: Date, required: true },
  ipAddress: { type: String, required: true },
  location: {
    city: String,
    state_prov: String,
    country: String,
    zipcode: String,
    lat: Number,
    lon: Number,
  },
});

export const PageVisit: Model<IPageVisit> =
  mongoose.models.PageVisit ||
  mongoose.model<IPageVisit>("PageVisit", pageVisitSchema);
