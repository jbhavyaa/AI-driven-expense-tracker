import React, { useEffect, useState } from "react";
import "./styles.css";

const UserProfile = () => {
  const [history, setHistory] = useState({
    monthlyExpenses: [],
    budgetAllocation: [],
    currentSavings: [],
    financialGoalProgress: [],
  });

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const userId = "replace_with_actual_user_id"; // Replace this with real user ID
        const response = await fetch(`http://localhost:5000/api/user/history/${userId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch history");
        }
        const data = await response.json();
        setHistory(data);
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };
  
    fetchHistory();
  }, []);
  
  return (
    <div className="profile-container">
      <h2>User History</h2>

      <div className="history-section">
        <h3>📊 Monthly Expenses History</h3>
        <ul>
          {history.monthlyExpenses.length > 0 ? (
            history.monthlyExpenses.map((item, index) => (
              <li key={index}>
                {item.amount} on {new Date(item.date).toLocaleDateString()}
              </li>
            ))
          ) : (
            <p>No records found.</p>
          )}
        </ul>
      </div>

      <div className="history-section">
        <h3>🏦 Budget Allocation History</h3>
        <ul>
          {history.budgetAllocation.length > 0 ? (
            history.budgetAllocation.map((entry, index) => (
              <li key={index}>
                {entry.category}: {entry.amount} on{" "}
                {new Date(entry.date).toLocaleDateString()}
              </li>
            ))
          ) : (
            <p>No records found.</p>
          )}
        </ul>
      </div>

      <div className="history-section">
        <h3>💰 Current Savings History</h3>
        <ul>
          {history.currentSavings.length > 0 ? (
            history.currentSavings.map((entry, index) => (
              <li key={index}>
                {entry.amount} on {new Date(entry.date).toLocaleDateString()}
              </li>
            ))
          ) : (
            <p>No records found.</p>
          )}
        </ul>
      </div>

      <div className="history-section">
        <h3>🎯 Financial Goals Progress</h3>
        <ul>
          {history.financialGoalProgress.length > 0 ? (
            history.financialGoalProgress.map((goal, index) => (
              <li key={index}>
                {goal.description} - {goal.status} (Updated:{" "}
                {new Date(goal.date).toLocaleDateString()})
              </li>
            ))
          ) : (
            <p>No records found.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
