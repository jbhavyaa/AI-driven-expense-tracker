const Savings = require("../models/Savings");

// Add or Update Savings
const addOrUpdateSavings = async (req, res) => {
  const { currentSavings, savingsGoal } = req.body;
  try {
    let savings = await Savings.findOne({ userId: req.user.id });

    if (savings) {
      savings.currentSavings = currentSavings;
      savings.savingsGoal = savingsGoal;
    } else {
      savings = new Savings({ userId: req.user.id, currentSavings, savingsGoal });
    }

    await savings.save();
    res.json({ message: "Savings updated successfully", savings });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Fetch Savings Data
const getSavings = async (req, res) => {
  try {
    const savings = await Savings.findOne({ userId: req.user.id });
    res.json(savings || { currentSavings: 0, savingsGoal: 0 });
  } catch (error) {
    res.status(500).json({ message: "Error fetching savings" });
  }
};

module.exports = { addOrUpdateSavings, getSavings }; 
