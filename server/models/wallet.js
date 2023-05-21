const Mongoose = require("mongoose");
const { Schema } = Mongoose;
const { TRANSACTION_STATUS, TRANSACTION_TYPE } = require("../constants");

const TransactionSchema = new Schema({
  // Transaction fields
  order: {
    type: Schema.Types.ObjectId,
    ref: "Order",
  },
  amount: {
    type: Number,
    default: 0,
  },
  outcome: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    enum: [TRANSACTION_STATUS.Processing, TRANSACTION_STATUS.Approved, TRANSACTION_STATUS.Rejected],
    default: TRANSACTION_STATUS.Processing,
  },
  type: {
    type: String,
    enum: Object.values(TRANSACTION_TYPE),
    default: TRANSACTION_TYPE.Withdraw,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Mongoose.model("Transaction", TransactionSchema);

const WalletSchema = new Schema({
  // Wallet fields
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  balance: {
    type: Number,
    default: 0,
  },
  transactions: [TransactionSchema],
});

WalletSchema.methods.updateBalance = function () {
  const wallet = this;
  wallet.balance = wallet.transactions.reduce((total, transaction) => {
    if (transaction.status === TRANSACTION_STATUS.Approved) {
      if (transaction.type === TRANSACTION_TYPE.Recharge) {
        return total + transaction.amount;
      } else {
        return total - transaction.amount;
      }
    }
    return total;
  }, 0);
};

WalletSchema.methods.addTransaction = function (transactionData) {
  const wallet = this;
  const transaction = new Mongoose.model("Transaction", TransactionSchema)(transactionData);
  wallet.transactions.push(transaction);
  wallet.save();
};

module.exports = Mongoose.model("Wallet", WalletSchema);
