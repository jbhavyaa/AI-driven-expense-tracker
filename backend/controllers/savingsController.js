const Savings = require("../models/Savings");

// Save savings data
exports.saveSavings = async (req, res) => {
  try {
    const { currentSavings, savingsGoal } = req.body;
    const newSavings = new Savings({ currentSavings, savingsGoal });
    await newSavings.save();
    res.status(200).json({ message: "Savings data saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save data." });
  }
};

// Get all savings history
exports.getSavingsHistory = async (req, res) => {
  try {
    const savings = await Savings.find().sort({ date: -1 });
    res.status(200).json(savings);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data." });
  }
};
