const Budget = require("../models/Budget");

// Save or Update Budget for a User
exports.saveBudget = async (req, res) => {
  try {
    const { email, budgets } = req.body;
    if (!email) {
      return res.status(400).json({ message: "User email is required." });
    }

    let userBudget = await Budget.findOne({ email });

    if (userBudget) {
      userBudget.budgets = budgets;
      await userBudget.save();
    } else {
      userBudget = new Budget({ email, budgets });
      await userBudget.save();
    }

    res.json({ message: "Budget saved successfully", budgetData: userBudget });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get Budget for a Logged-in User
exports.getUserBudget = async (req, res) => {
  try {
    const { email } = req.params;
    const userBudget = await Budget.findOne({ email });
    res.json({ budgetData: userBudget ? userBudget.budgets : [] });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
