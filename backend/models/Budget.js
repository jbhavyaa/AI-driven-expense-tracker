const mongoose = require("mongoose");

const BudgetSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  budgets: [
    {
      category: String,
      amount: Number,
    },
  ],
});

module.exports = mongoose.model("Budget", BudgetSchema);
