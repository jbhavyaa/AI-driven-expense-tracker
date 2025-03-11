const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  goals: [
    {
      goal: String,
      amount: Number,
      progress: Number,
    },
  ],
});

module.exports = mongoose.model("Goal", goalSchema);
