const Mongoose = require("mongoose");

const { ROLES, EMAIL_PROVIDER } = require("../constants");
const crypto = require("crypto");
const { Schema } = Mongoose;
const Wallet = require("./wallet");
// User Schema
const UserSchema = new Schema({
  email: {
    type: String,
    required: () => {
      return this.provider !== "email" ? false : true;
    },
  },
  phoneNumber: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  password: {
    type: String,
  },
  merchant: {
    type: Schema.Types.ObjectId,
    ref: "Merchant",
    default: null,
  },
  wallet: {
    type: Schema.Types.ObjectId,
    ref: "Wallet",
    default: null,
  },
  provider: {
    type: String,
    required: true,
    default: EMAIL_PROVIDER.Email,
  },
  googleId: {
    type: String,
  },
  facebookId: {
    type: String,
  },

  avatar: {
    type: String,
  },
  role: {
    type: String,
    default: ROLES.Member,
    enum: [ROLES.Admin, ROLES.Member, ROLES.Merchant],
  },
  referral_code: {
    type: String,
    default: null,
  },
  points: {
    type: Number,
    default: 0,
  },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.post("save", async function (doc) {
  // Logic for assigning a new wallet to the user
  if (!doc.wallet) {
    const newWallet = new Wallet();
    await newWallet.save();
    doc.wallet = newWallet._id;
    await doc.save();
  }
  // Logic for generating and setting the referral code
  if (!doc.referral_code) {
    const referralCode = generateReferralCode();
    doc.referral_code = referralCode;
    doc.save();
  }
  if (doc.referral_code_used_by) {
    const referrer = await this.findOne({ referral_code: doc.referral_code_used_by });
    if (referrer) {
      referrer.points += 100; // Add points to the referrer
      await referrer.save();
    }
    // Logic for adding balance to wallet if points exceed 10000
    if (doc.points > 10000 && doc.wallet) {
      const wallet = await Wallet.findById(doc.wallet);
      if (wallet) {
        wallet.balance += 10; // Add balance to the wallet balance
        doc.points = 0; // Reset the user's points
        await Promise.all([wallet.save(), doc.save()]);
      }
    }
  }
});

function generateReferralCode() {
  // Generate and return a unique referral code
  const timestamp = Date.now().toString();
  const hash = crypto.createHash("sha256").update(timestamp).digest("hex");
  return hash;
}
module.exports = Mongoose.model("User", UserSchema);
