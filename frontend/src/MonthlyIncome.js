import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./styles.css";

const MonthlyIncome = () => {
  const [month, setMonth] = useState("");
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState("");
  const [investment, setInvestment] = useState("");
  const [incomeList, setIncomeList] = useState([]);

  const navigate = useNavigate(); // Initialize navigate

  // Function to handle adding income details
  const handleAddIncome = () => {
    if (!source || !amount || !investment) {
      alert("Please fill all fields");
      return;
    }
    const newIncome = { source, amount: parseFloat(amount), investment };
    setIncomeList([...incomeList, newIncome]);

    // Clear input fields after adding
    setSource("");
    setAmount("");
    setInvestment("");
  };

  // Calculate total income
  const totalIncome = incomeList.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="income-container">
      <h2 className="title">INCOME</h2>

      <label className="label">Select Month:</label>
      <select className="dropdown" value={month} onChange={(e) => setMonth(e.target.value)}>
        <option value="">Select Month</option>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
      </select>

      <div className="total-income">Total Income for {month || "selected month"}: ${totalIncome}</div>

      <div className="form-group">
        <label>Investments:</label>
        <select className="dropdown" value={investment} onChange={(e) => setInvestment(e.target.value)}>
          <option value="">Select Investments</option>
          <option value="401(k)">401(k)</option>
          <option value="Stocks">Stocks</option>
          <option value="Real Estate">Real Estate</option>
        </select>

        <label>Source of Income:</label>
        <select className="dropdown" value={source} onChange={(e) => setSource(e.target.value)}>
          <option value="">Select Source</option>
          <option value="Salary">Salary</option>
          <option value="Freelancing">Freelancing</option>
          <option value="Rental Income">Rental Income</option>
        </select>

        <label>Amount:</label>
        <input type="number" placeholder="Enter amount" className="input-field" value={amount} onChange={(e) => setAmount(e.target.value)} />
        
        <button className="add-btn" onClick={handleAddIncome}>Add</button>
      </div>

      {/* Table for displaying added incomes */}
      <table className="income-table">
        <thead>
          <tr>
            <th>Source of Income</th>
            <th>Amount</th>
            <th>Investments</th>
          </tr>
        </thead>
        <tbody>
          {incomeList.map((income, index) => (
            <tr key={index}>
              <td>{income.source}</td>
              <td>${income.amount}</td>
              <td>{income.investment}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="buttons">
        <button className="back-btn" onClick={() => navigate(-1)}>Back</button> {/* Back button logic */}
        <button className="save-btn">Save</button>
      </div>
    </div>
  );
};

export default MonthlyIncome;
