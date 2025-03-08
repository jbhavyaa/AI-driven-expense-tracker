const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const Expense = require("../models/Expense");

const router = express.Router();

// ADD NEW EXPENSE
router.post("/add", authMiddleware, async (req, res) => {
  const { category, amount, description } = req.body;

  try {
    const newExpense = new Expense({
      userId: req.user.id,
      category,
      amount,
      description,
    });

    await newExpense.save();
    res.status(201).json({ msg: "Expense added successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
});

// GET USER'S EXPENSES
router.get("/", authMiddleware, async (req, res) => {
  try {
    const expenses = await Expense.find({ userId: req.user.id }).sort({ date: -1 });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
