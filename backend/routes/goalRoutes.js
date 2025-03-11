const express = require("express");
const { saveGoals, getGoals } = require("../controllers/goalController");

const router = express.Router();

router.post("/", saveGoals);
router.get("/", getGoals);

module.exports = router;
