const Goal = require("../models/Goal");

// Fetch goals based on user email
const getGoals = async (req, res) => {
  try {
    const { email } = req.params;
    const userGoals = await Goal.findOne({ email });

    if (userGoals) {
      res.json({ success: true, goals: userGoals.goals });
    } else {
      res.json({ success: true, goals: [] });
    }
  } catch (error) {
    console.error("Error fetching goals:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Save or update goals for a user
const saveGoals = async (req, res) => {
  try {
    const { email, goals } = req.body;

    let userGoals = await Goal.findOne({ email });

    if (userGoals) {
      // Update existing goals
      userGoals.goals = goals;
    } else {
      // Create new goals document
      userGoals = new Goal({ email, goals });
    }

    await userGoals.save();
    res.json({ success: true, message: "Goals saved successfully!" });
  } catch (error) {
    console.error("Error saving goals:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = { getGoals, saveGoals };
