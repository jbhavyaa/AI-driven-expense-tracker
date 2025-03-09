const express = require("express");
const Income = require("../models/Income");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// ➤ Add multiple incomes at once
router.post("/add", protect, async (req, res) => {
  const { month, incomeList } = req.body;

  if (!month || !incomeList || incomeList.length === 0) {
    return res.status(400).json({ message: "Month and income details are required" });
  }

  try {
    const incomes = incomeList.map((income) => ({
      userId: req.user.id,
      month,
      source: income.source,
      amount: income.amount,
      investment: income.investment,
    }));

    await Income.insertMany(incomes);

    res.status(201).json({ message: "Incomes added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

module.exports = router;
