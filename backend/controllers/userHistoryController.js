const UserHistory = require("../models/UserHistory");

const getUserHistory = async (req, res) => {
  try {
    const history = await UserHistory.findOne({ userId: req.params.userId });
    if (!history) return res.status(404).json({ message: "User history not found" });

    res.json(history);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

const updateUserHistory = async (req, res) => {
  try {
    const { monthlyExpenses, budgetAllocation, currentSavings, financialGoalProgress } = req.body;

    let history = await UserHistory.findOne({ userId: req.params.userId });

    if (!history) {
      history = new UserHistory({
        userId: req.params.userId,
        monthlyExpenses,
        budgetAllocation,
        currentSavings,
        financialGoalProgress,
      });
    } else {
      history.monthlyExpenses = monthlyExpenses || history.monthlyExpenses;
      history.budgetAllocation = budgetAllocation || history.budgetAllocation;
      history.currentSavings = currentSavings !== undefined ? currentSavings : history.currentSavings;
      history.financialGoalProgress = financialGoalProgress || history.financialGoalProgress;
    }

    await history.save();
    res.json({ message: "Updated successfully", history });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

module.exports = { getUserHistory, updateUserHistory };
