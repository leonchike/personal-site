// models/pageVisit.ts
import mongoose, { Document, Model, Schema } from "mongoose";

export interface IPageVisit extends Document {
  pathname: string;
  timestamp: Date;
  ipAddress: string;
  referrer?: string;
  location: {
    city: string;
    state_prov: string;
    country: string;
    zipcode: string;
    lat: number;
    lon: number;
  };
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

const pageVisitSchema: Schema = new Schema({
  pathname: { type: String, required: true },
  timestamp: { type: Date, required: true },
  ipAddress: { type: String, required: true },
  referrer: { type: String, default: null },
  location: {
    city: String,
    state_prov: String,
    country: String,
    zipcode: String,
    lat: Number,
    lon: Number,
  },
  utmSource: { type: String, default: null },
  utmMedium: { type: String, default: null },
  utmCampaign: { type: String, default: null },
});

export const PageVisit: Model<IPageVisit> =
  mongoose.models.PageVisit ||
  mongoose.model<IPageVisit>("PageVisit", pageVisitSchema);
