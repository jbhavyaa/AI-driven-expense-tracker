import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const CurrentSavings = () => {
  const [currentSavings, setCurrentSavings] = useState("");
  const [savingsGoal, setSavingsGoal] = useState("");
  const navigate = useNavigate();

  return (
    <div className="savings-container">
      <h2 className="title">Current Savings</h2>

      <label className="label">Current Savings ($):</label>
      <input
        type="number"
        placeholder="Enter your current savings"
        className="input-field"
        value={currentSavings}
        onChange={(e) => setCurrentSavings(e.target.value)}
      />

      <label className="label">Savings Goal ($):</label>
      <input
        type="number"
        placeholder="Enter your savings goal"
        className="input-field"
        value={savingsGoal}
        onChange={(e) => setSavingsGoal(e.target.value)}
      />

      <div className="total-savings">
        Total Savings: ${parseFloat(currentSavings) || 0}
      </div>

      <div className="buttons">
        <button className="back-btn" onClick={() => navigate("/dashboard")}>Back</button>
        <button className="save-btn">Save</button>
      </div>
    </div>
  );
};

export default CurrentSavings;
