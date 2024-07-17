import mongoose from "mongoose";
import { type } from "os";

const Schema = mongoose.Schema;

const moduleSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    available: {
      type: Boolean,
      required: true,
    },
    targetTemperature: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Module", moduleSchema);
