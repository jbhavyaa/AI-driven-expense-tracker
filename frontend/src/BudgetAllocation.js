import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./styles.css"; // Ensure this CSS is applied

function BudgetAllocation() {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [budgetList, setBudgetList] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  const handleAddBudget = () => {
    if (category && amount > 0) {
      setBudgetList([...budgetList, { category, amount: parseFloat(amount) }]);
      setCategory("");
      setAmount("");
    } else {
      alert("Please enter a valid category and amount greater than zero.");
    }
  };

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const totalBudget = budgetList.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="container">
      <h2>Budget Allocation</h2>
      <p>Allocate budgets for different categories to manage expenses.</p>
      
      <div className="input-group">
        <input
          type="text"
          placeholder="Category (e.g., Food, Rent)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="1"
        />
        <div className="buttons">
          <button className="back-btn" onClick={handleBack}>Back</button>
          <button className="save-btn" onClick={handleAddBudget}>Add Budget</button>
        </div>
      </div>

      <h3>Total Budget: Rs{totalBudget.toFixed(2) }</h3>

      <div className="budget-list">
        {budgetList.map((item, index) => (
          <div key={index} className="budget-item">
            <h4>{item.category}</h4>
            <p>Amount: Rs{item.amount.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BudgetAllocation;
