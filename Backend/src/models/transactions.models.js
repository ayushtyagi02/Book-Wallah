import mongoose, { Schema } from "mongoose";

const transactionSchema = new Schema({
  lender: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  isExchanging:{
    type: Boolean, 
  },
  isBorrowing:{
    type: Boolean,
  },
  requestedbook: {
    type: Schema.Types.ObjectId,
    ref: "Book",
  },
  offeredbook: {
    type: Schema.Types.ObjectId,
    ref: "Book",
  },
  transactionDate: {
    type: Date,
    required :true,
    default: Date.now()
  },
  transactionStatus: {
    type: String,
    required: true,
    enum:["Requested","Accepted","Rejected"]
  },

},{
    timestamps:true 
});

export const Transaction = mongoose.model("Transaction", transactionSchema);
