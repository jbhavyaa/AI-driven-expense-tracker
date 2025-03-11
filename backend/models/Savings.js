const mongoose = require("mongoose");

const SavingsSchema = new mongoose.Schema({
  currentSavings: { type: Number, required: true },
  savingsGoal: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Savings", SavingsSchema);
