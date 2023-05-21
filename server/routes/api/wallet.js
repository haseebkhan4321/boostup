const express = require("express");
const router = express.Router();
const Mongoose = require("mongoose");

// Bring in Models & Utils
const Wallet = require("../../models/wallet");
const Cart = require("../../models/cart");
const auth = require("../../middleware/auth");
const mailgun = require("../../services/mailgun");
const { ROLES, TRANSACTION_STATUS, TRANSACTION_TYPE } = require("../../constants");
const { findById, findOne } = require("../../models/order");

router.post("/approve", auth, async (req, res) => {
  const transactionId = req.body.transactionId;
  try {
    const wallet = await Wallet.findOneAndUpdate(
      { "transactions._id": transactionId },
      {
        "transactions.$.status": TRANSACTION_STATUS.Approved,
      }
    );
    if (wallet) {
      const transaction = wallet.transactions.find((transaction) => transaction._id == transactionId);
      const amount =
        transaction.type == TRANSACTION_TYPE.Withdraw
          ? wallet.balance - transaction.amount
          : wallet.balance + transaction.amount;

      const updatWallet = await Wallet.updateOne({ _id: wallet._id }, { balance: amount });
      //   console.log(updatWallet);
    }
    // await mailgun.sendEmail(order.user.email, "order-confirmation", newOrder);

    res.status(200).json({
      success: true,
      message: `Your transaction successfully!`,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

router.post("/withdraw", auth, async (req, res) => {
  try {
    const user = req.body.user_id;
    const amount = req.body.amount;
    const transaction = {
      amount: amount,
      type: TRANSACTION_TYPE.Withdraw,
    };
    const wallet = await Wallet.findOne(user).exec();
    console.log(wallet);
    if (wallet.balance < amount) {
      return res.status(400).json({
        error: "Insufficient balance",
      });
    }
    wallet.addTransaction(transaction);
    res.status(200).json({
      success: true,
      message: `Your transaction successfully!`,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

router.post("/recharge", auth, async (req, res) => {
  try {
    const user = req.body.user_id;
    const amount = req.body.amount;
    const transaction = {
      amount: amount,
      type: TRANSACTION_TYPE.Recharge,
    };
    const wallet = await Wallet.findOne(user).exec();

    wallet.addTransaction(transaction);
    res.status(200).json({
      success: true,
      message: `Your transaction successfully!`,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

module.exports = router;
