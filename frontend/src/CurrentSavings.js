import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const CurrentSavings = () => {
  const [userEmail, setUserEmail] = useState("");
  const [currentSavings, setCurrentSavings] = useState(0);
  const [savingsGoal, setSavingsGoal] = useState(0);
  const [newSavings, setNewSavings] = useState("");
  const [newGoal, setNewGoal] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser && loggedInUser.email) {
      setUserEmail(loggedInUser.email);
      fetchSavings(loggedInUser.email);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const fetchSavings = async (email) => {
    try {
      const response = await fetch(`http://localhost:5000/api/savings/${email}`);
      if (response.ok) {
        const data = await response.json();
        setCurrentSavings(data.currentSavings || 0);
        setSavingsGoal(data.savingsGoal || 0);
      }
    } catch (error) {
      console.error("Error fetching savings data:", error);
    }
  };

  const handleSave = async () => {
    const addedSavings = parseFloat(newSavings) || 0;
    const addedGoal = parseFloat(newGoal) || 0;
    const updatedSavings = currentSavings + addedSavings;
    const updatedGoal = savingsGoal + addedGoal;

    try {
      const response = await fetch("http://localhost:5000/api/savings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
          currentSavings: updatedSavings,
          savingsGoal: updatedGoal,
        }),
      });

      if (response.ok) {
        setCurrentSavings(updatedSavings);
        setSavingsGoal(updatedGoal);
        setNewSavings("");
        setNewGoal("");
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

      <div className="form-section">
        <label className="label">Add to Savings (Rs):</label>
        <input
          type="number"
          placeholder="Enter amount to add"
          className="input-field"
          value={newSavings}
          onChange={(e) => setNewSavings(e.target.value)}
        />

        <label className="label">Increase Savings Goal (Rs):</label>
        <input
          type="number"
          placeholder="Enter new goal amount"
          className="input-field"
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
        />

        <div className="buttons">
          <button className="back-btn" onClick={() => navigate("/dashboard")}>
            Back
          </button>
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>

      <div className="data-display">
        <h3>Your Savings Overview</h3>
        <p><strong>Total Savings:</strong> Rs {currentSavings}</p>
        <p><strong>Savings Goal:</strong> Rs {savingsGoal}</p>
      </div>
    </div>
  );
};

export default CurrentSavings;
