const Income = require("../models/Income");

// ✅ Add income details
const addIncome = async (req, res) => {
  const { month, incomeList } = req.body;

  if (!month || !incomeList.length) {
    return res.status(400).json({ msg: "Please provide month and income details." });
  }

  try {
    const income = new Income({ user: req.user.id, month, incomeList });
    await income.save();
    res.status(201).json({ msg: "Income saved successfully", income });
  } catch (error) {
    res.status(500).json({ msg: "Server error", error });
  }
};

// ✅ Get income details for logged-in user
const getIncome = async (req, res) => {
  try {
    const income = await Income.find({ user: req.user.id });
    res.status(200).json(income);
  } catch (error) {
    res.status(500).json({ msg: "Server error", error });
  }
};

module.exports = { addIncome, getIncome };
