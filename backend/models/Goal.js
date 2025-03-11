const mongoose = require("mongoose");

const GoalSchema = new mongoose.Schema({
  goal: { type: String, required: true },
  amount: { type: Number, required: true },
  progress: { type: Number, required: true, min: 0, max: 100 },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Goal", GoalSchema);
