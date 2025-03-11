const Savings = require("../models/Savings");

exports.getSavings = async (req, res) => {
  try {
    const { email } = req.params;
    const savings = await Savings.findOne({ email });

    if (savings) {
      res.status(200).json({
        success: true,
        currentSavings: savings.currentSavings,
        savingsGoal: savings.savingsGoal,
      });
    } else {
      res.status(200).json({ success: true, currentSavings: 0, savingsGoal: 0 });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching savings data" });
  }
};

exports.saveSavings = async (req, res) => {
  try {
    const { email, currentSavings, savingsGoal } = req.body;
    let savings = await Savings.findOne({ email });

    if (savings) {
      savings.currentSavings = currentSavings;
      savings.savingsGoal = savingsGoal;
    } else {
      savings = new Savings({ email, currentSavings, savingsGoal });
    }

    await savings.save();
    res.status(200).json({ success: true, message: "Savings data saved successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error saving savings data" });
  }
};
