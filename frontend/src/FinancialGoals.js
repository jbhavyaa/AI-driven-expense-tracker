import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"; // Using the same CSS as MonthlyIncome

function FinancialGoals() {
  const [goal, setGoal] = useState("");
  const [amount, setAmount] = useState("");
  const [progress, setProgress] = useState(0);
  const [goalsList, setGoalsList] = useState([]);
  const navigate = useNavigate();

  const handleAddGoal = () => {
    if (goal && amount && progress >= 0 && progress <= 100) {
      const newGoal = { goal, amount, progress };
      setGoalsList([...goalsList, newGoal]);
      setGoal("");
      setAmount("");
      setProgress(0);
    } else {
      alert("Please enter valid details and ensure progress is between 0 and 100.");
    }
  };

  const handleSave = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/goals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(goalsList),
      });

      if (response.ok) {
        alert("Goals saved successfully!");
      } else {
        throw new Error("Failed to save goals.");
      }
    } catch (error) {
      console.error("Error saving goals:", error);
      alert("Error: Could not save goals.");
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="container">
      <h2>Financial Goals Progress</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter Goal (e.g., Buy a Car)"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <input
          type="number"
          placeholder="Target Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="number"
          placeholder="Progress (%)"
          value={progress}
          onChange={(e) => setProgress(e.target.value)}
          min="0"
          max="100"
        />
        <div className="buttons">
          <button className="back-btn" onClick={handleBack}>
            Back
          </button>
          <button className="add-btn" onClick={handleAddGoal}>
            Add Goal
          </button>
        </div>
      </div>

      <div className="goal-list">
        {goalsList.map((item, index) => (
          <div key={index} className="goal-item">
            <h3>{item.goal}</h3>
            <p>Target: Rs{item.amount}</p>
            <p>Progress: {item.progress}%</p>
            <progress value={item.progress} max="100"></progress>
          </div>
        ))}
      </div>

      {goalsList.length > 0 && (
        <button className="save-btn" onClick={handleSave}>
          Save Goals
        </button>
      )}
    </div>
  );
}

export default FinancialGoals;
