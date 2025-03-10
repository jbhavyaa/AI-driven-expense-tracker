const express = require("express");
const { addOrUpdateSavings, getSavings } = require("../controllers/savingsController"); 
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/add", protect, addOrUpdateSavings); 
router.get("/fetch", protect, getSavings);

module.exports = router;
