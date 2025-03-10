const mongoose = require("mongoose");

const SavingsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  currentSavings: { type: Number, required: true },
  savingsGoal: { type: Number, required: true },
});

module.exports = mongoose.model("Savings", SavingsSchema);
