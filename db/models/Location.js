import mongoose from "mongoose";
const { Schema } = mongoose;

const locationSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String },
  image: { type: String },
  mapURL: { type: String },
  description: { type: String },
});

const Location =
  mongoose.models.Product || mongoose.model("Location", locationSchema);

export default Location;
