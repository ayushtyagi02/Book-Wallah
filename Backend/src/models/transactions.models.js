import mongoose, { Schema } from "mongoose";

const transactionSchema = new Schema({
  name: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  book: {
    type: Schema.Types.ObjectId,
    ref: "Book",
  },
  currency: {
    type: String,
    required: true,
  },
  transactionDate: {
    type: Date,
    required :true 
  },
  transactionStatus: {
    type: String,
    required: true,
  },
  transactionType: {
    type: String,
    required: true,
  },
  transactionAmount: {
    type: Number,
    required: true,
  },
  billingInfo :{
    type :String 
  }
},{
    timestamps:true 
});

export const Transaction = mongoose.model("Transaction", transactionSchema);
