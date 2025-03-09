import React, { useState } from "react";
import "./styles.css";

const ExpenseTracking = () => {
  const [expense, setExpense] = useState({
    date: "",
    category: "",
    amount: "",
    totalMonthlyExpenses: "",
  });

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Expense Data:", expense);
    alert("Expense recorded successfully!");
  };

  return (
    <div className="form-container">
      <h2>Expense Tracking</h2>
      <form onSubmit={handleSubmit}>
        <label>Date:</label>
        <input type="date" name="date" value={expense.date} onChange={handleChange} required />

        <label>Category:</label>
        <select name="category" value={expense.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Rent">Rent</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Others">Others</option>
        </select>

        <label>Amount Spent:</label>
        <input type="number" name="amount" value={expense.amount} onChange={handleChange} required />

        <label>Total Monthly Expenses:</label>
        <input type="number" name="totalMonthlyExpenses" value={expense.totalMonthlyExpenses} onChange={handleChange} required />

        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseTracking;
