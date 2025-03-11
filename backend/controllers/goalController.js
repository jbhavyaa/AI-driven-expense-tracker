const Goal = require("../models/Goal");

// Save multiple financial goals
exports.saveGoals = async (req, res) => {
  try {
    const goals = req.body;
    if (!Array.isArray(goals) || goals.length === 0) {
      return res.status(400).json({ error: "Invalid data format." });
    }

    await Goal.insertMany(goals);
    res.status(200).json({ message: "Financial goals saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save financial goals." });
  }
};

// Get all saved financial goals
exports.getGoals = async (req, res) => {
  try {
    const goals = await Goal.find().sort({ date: -1 });
    res.status(200).json(goals);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch financial goals." });
  }
};
