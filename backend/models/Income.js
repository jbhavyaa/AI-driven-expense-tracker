const mongoose = require("mongoose");

const IncomeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  month: { type: String, required: true },
  incomeList: [
    {
      source: { type: String, required: true },
      amount: { type: Number, required: true },
      investment: { type: String, required: true },
    },
  ],
});

module.exports = mongoose.model("Income", IncomeSchema);
