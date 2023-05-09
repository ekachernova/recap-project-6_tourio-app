import mongoose from "mongoose";
const { Schema } = mongoose;

const placeSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String },
  image: { type: String },
  mapURL: { type: String },
  description: { type: String },
});

const Place = mongoose.models.Place || mongoose.model("Place", placeSchema);

export default Place;
