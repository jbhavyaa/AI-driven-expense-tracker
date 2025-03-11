const express = require("express");
const { saveBudget, getUserBudget } = require("../controllers/budgetController");

const router = express.Router();

router.post("/", saveBudget);  
router.get("/:email", getUserBudget);  

module.exports = router;
