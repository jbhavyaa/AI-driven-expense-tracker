const mongoose = require("mongoose");

const IncomeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  month: { type: String, required: true },
  source: { type: String, required: true },
  amount: { type: Number, required: true },
  investment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Income", IncomeSchema);
