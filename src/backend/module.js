import mongoose from "mongoose";

const USEr = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    image: {
        data: Buffer,
        contentType: String,
      },
    paragraph: {
      type: String, // long text or description
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  // Create the model
   export const DATA = mongoose.model('Content', USEr);
  