const express = require("express");
const { getUserHistory, updateUserHistory } = require("../controllers/userHistoryController");
const router = express.Router();

router.get("/:userId", getUserHistory);  
router.put("/:userId", updateUserHistory);  

module.exports = router;
