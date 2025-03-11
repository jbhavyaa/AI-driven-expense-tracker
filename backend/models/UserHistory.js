const mongoose = require("mongoose");

const UserHistorySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  monthlyExpenses: [{ category: String, amount: Number }],
  budgetAllocation: [{ category: String, amount: Number }],
  currentSavings: { type: Number, default: 0 },
  financialGoalProgress: { type: String, default: "" },
});

module.exports = mongoose.model("UserHistory", UserHistorySchema);
