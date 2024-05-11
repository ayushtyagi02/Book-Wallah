import mongoose, { Schema } from "mongoose";

const authorSchema = new Schema({
  authorName: {
    type: String,
    required: true,
  },
  publishDate: {
    type: String,
    required: true,
  },
  biography: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  awards: {
    type: String,
  },
  bookWritten: {
    type: String,
  }
} ,{
    timestamps : true 
});

export const Author = mongoose.model("Author", authorSchema);
