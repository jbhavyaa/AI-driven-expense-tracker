const mongoose = require("mongoose");

const savingsSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  currentSavings: { type: Number, default: 0 },
  savingsGoal: { type: Number, default: 0 },
});

module.exports = mongoose.model("Savings", savingsSchema);
