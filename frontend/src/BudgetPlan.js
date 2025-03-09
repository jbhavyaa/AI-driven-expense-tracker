import React, { useState } from "react";
import "./styles.css";

const BudgetPlan = () => {
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [savingsGoal, setSavingsGoal] = useState("");
  
  const categories = ["Housing", "Food", "Transportation", "Utilities", "Entertainment", "Others"];
  
  const initialBudgets = {};
  categories.forEach((cat) => {
    initialBudgets[cat] = "";
  });
  
  const [budgets, setBudgets] = useState(initialBudgets);

  const handleBudgetChange = (e, category) => {
    setBudgets({ ...budgets, [category]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const budgetPlan = {
      monthlyIncome,
      savingsGoal,
      recommendedBudgets: budgets,
    };
    console.log("Budget Plan:", budgetPlan);
    alert("Budget plan saved successfully!");
    // Reset all fields
    setMonthlyIncome("");
    setSavingsGoal("");
    setBudgets(initialBudgets);
  };

  return (
    <div className="budget-plan-container">
      <h2 className="title">Budget Plan</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label">Monthly Income:</label>
          <input
            type="number"
            className="input-field"
            value={monthlyIncome}
            onChange={(e) => setMonthlyIncome(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="label">Savings Goal:</label>
          <input
            type="number"
            className="input-field"
            value={savingsGoal}
            onChange={(e) => setSavingsGoal(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="label">Recommended Budget for Each Category:</label>
          {categories.map((category, index) => (
            <div key={index} className="category-group">
              <label className="label">{category}:</label>
              <input
                type="number"
                className="input-field"
                value={budgets[category]}
                onChange={(e) => handleBudgetChange(e, category)}
                placeholder={`Enter budget for ${category}`}
                required
              />
            </div>
          ))}
        </div>
        <button type="submit" className="save-btn">
          Save Budget Plan
        </button>
      </form>
    </div>
  );
};

export default BudgetPlan;
