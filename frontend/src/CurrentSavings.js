import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const CurrentSavings = () => {
  const [currentSavings, setCurrentSavings] = useState("");
  const [savingsGoal, setSavingsGoal] = useState("");
  const navigate = useNavigate();

  const handleSave = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/savings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentSavings: parseFloat(currentSavings) || 0,
          savingsGoal: parseFloat(savingsGoal) || 0,
        }),
      });

      if (response.ok) {
        alert("Savings data saved successfully!");
      } else {
        throw new Error("Failed to save data.");
      }
    } catch (error) {
      console.error("Error saving savings data:", error);
      alert("Error: Could not save data.");
    }
  };

  return (
    <div className="savings-container">
      <h2 className="title">Current Savings</h2>

      <label className="label">Current Savings (Rs):</label>
      <input
        type="number"
        placeholder="Enter your current savings"
        className="input-field"
        value={currentSavings}
        onChange={(e) => setCurrentSavings(e.target.value)}
      />

      <label className="label">Savings Goal (Rs):</label>
      <input
        type="number"
        placeholder="Enter your savings goal"
        className="input-field"
        value={savingsGoal}
        onChange={(e) => setSavingsGoal(e.target.value)}
      />

      <div className="total-savings">
        Total Savings: Rs{parseFloat(currentSavings) || 0}
      </div>

      <div className="buttons">
        <button className="back-btn" onClick={() => navigate("/dashboard")}>
          Back
        </button>
        <button className="save-btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CurrentSavings;
