import React, { useState } from "react";
import "./styles.css"; // Using the same CSS as MonthlyIncome

function FinancialGoals() {
  const [goal, setGoal] = useState("");
  const [amount, setAmount] = useState("");
  const [progress, setProgress] = useState(0);
  const [goalsList, setGoalsList] = useState([]);

  const handleAddGoal = () => {
    if (goal && amount && progress >= 0 && progress <= 100) {
      setGoalsList([...goalsList, { goal, amount, progress }]);
      setGoal("");
      setAmount("");
      setProgress(0);
    } else {
      alert("Please enter valid details and ensure progress is between 0 and 100.");
    }
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
        <button onClick={handleAddGoal}>Add Goal</button>
      </div>
      
      <div className="goal-list">
        {goalsList.map((item, index) => (
          <div key={index} className="goal-item">
            <h3>{item.goal}</h3>
            <p>Target: ${item.amount}</p>
            <p>Progress: {item.progress}%</p>
            <progress value={item.progress} max="100"></progress>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FinancialGoals;
