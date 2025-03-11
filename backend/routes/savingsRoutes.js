const express = require("express");
const { getSavings, saveSavings } = require("../controllers/savingsController");

const router = express.Router();

router.get("/:email", getSavings);
router.post("/", saveSavings);

module.exports = router;
