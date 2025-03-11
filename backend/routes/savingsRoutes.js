const express = require("express");
const { saveSavings, getSavingsHistory } = require("../controllers/savingsController");

const router = express.Router();

router.post("/", saveSavings);
router.get("/", getSavingsHistory);

module.exports = router;
