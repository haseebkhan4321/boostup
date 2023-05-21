const Mongoose = require("mongoose");
const { Schema } = Mongoose;

// Transaction Schema
const TransactionSchema = new Schema({
  order: {
    type: Schema.Types.ObjectId,
    ref: "Order",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  type: {
    type: String,
    enum: [TRANSACTION_TYPE.Withdraw, TRANSACTION_TYPE.Recharge],
    default: TRANSACTION_TYPE.Withdraw,
  },
  status: {
    type: String,
    enum: [TRANSACTION_STATUS.Rejected, TRANSACTION_STATUS.Approved, TRANSACTION_STATUS.Processing],
    default: TRANSACTION_STATUS.Processing,
  },
  balance: {
    type: Number,
    default: 0,
  },
  amount: {
    type: Number,
    default: 0,
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Mongoose.model("Transaction", TransactionSchema);
