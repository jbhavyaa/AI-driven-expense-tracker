import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"; // Ensure you have styles for better UI

function BudgetAllocation() {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [budgetList, setBudgetList] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser && loggedInUser.email) {
      setUserEmail(loggedInUser.email);
      fetchBudget(loggedInUser.email);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const fetchBudget = async (email) => {
    try {
      const response = await fetch(`http://localhost:5000/api/budget/${email}`);
      const data = await response.json();
      if (data.budgetData) {
        setBudgetList(data.budgetData);
      }
    } catch (error) {
      console.error("Error fetching budget:", error);
    }
  };

  const handleAddBudget = () => {
    if (category && amount > 0) {
      setBudgetList([...budgetList, { category, amount: parseFloat(amount) }]);
      setCategory("");
      setAmount("");
    } else {
      alert("Please enter a valid category and amount.");
    }
  };

  const saveBudget = async () => {
    if (!userEmail) {
      alert("User not logged in.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/budget", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userEmail, budgets: budgetList }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Budget saved successfully!");
      } else {
        alert(data.message || "Error saving budget.");
      }
    } catch (error) {
      console.error("Error saving budget:", error);
    }
  };

  return (
    <div className="container">
      <h2>Budget Allocation</h2>

      {/* Input Group with Back Button and Add Button Aligned */}
      <div className="input-group">
        <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
        <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} min="1" />
        <button className="add-btn" onClick={handleAddBudget}>Add Budget</button>
        <button className="back-btn" onClick={() => navigate("/dashboard")}>⬅ Back</button>
      </div>

      {/* Budget List */}
      <div className="budget-list">
        {budgetList.map((item, index) => (
          <div key={index} className="budget-item">
            <h4>{item.category}</h4>
            <p>Amount: ₹{item.amount.toFixed(2)}</p>
          </div>
        ))}
      </div>

      <button className="save-btn" onClick={saveBudget}>💾 Save Budget</button>
    </div>
  );
}

export default BudgetAllocation;
