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

// fetch my orders api
router.get("/me", auth, async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const user = req.user._id;
    const query = { user };

    const walletDoc = await Wallet.find(query)
      // .sort("-created")
      // .populate({
      //   path: "cart",
      //   populate: {
      //     path: "products.product",
      //     populate: {
      //       path: "brand",
      //     },
      //   },
      // })
      // .limit(limit * 1)
      // .skip((page - 1) * limit)
      .exec();

    // const count = await Order.countDocuments(query);
    // const orders = store.formatOrders(ordersDoc);

    res.status(200).json({
      walletDoc,
      // totalPages: Math.ceil(count / limit),
      // currentPage: Number(page),
      // count,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

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

module.exports = router;
