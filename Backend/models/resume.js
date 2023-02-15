import mongoose from "mongoose";
const Schema = mongoose.Schema;
import { APP_URL } from "../config";

const resumeSchema = new Schema(
  {
    userId: { type: String, required: true },
    job: { type: String, required: true },
    projectName: { type: String, required: true },
    occupation: { type: String },
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String },
    linkedIn: { type: String },
    website: { type: String },
    message: { type: String, required: true },
    image: {
      type: String,
      required: true,
      get: (image) => {
        return `${APP_URL}/${image.replace("\\", "/")}`;
      },
    },
    educations: { type: Array, required: true },
    experiences: { type: Array, required: true },
    skills: { type: Array, required: true },
    languages: { type: Array, required: true },
    interests: { type: Array, required: true },
  },
  { timestamps: true, toJSON: { getters: true }, id: false }
);

export default mongoose.model("Resume", resumeSchema, "resume");
