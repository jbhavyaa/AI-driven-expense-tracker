const express = require("express");
const router = express.Router();
const { getGoals, saveGoals } = require("../controllers/goalController");

// Route to fetch goals by user email
router.get("/:email", getGoals);

// Route to save or update goals
router.post("/", saveGoals);

module.exports = router;
