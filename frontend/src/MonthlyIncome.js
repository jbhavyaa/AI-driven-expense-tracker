import React, { useState, useEffect } from "react";
import "./styles.css";

const MonthlyIncome = () => {
  const [month, setMonth] = useState("");
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState("");
  const [investment, setInvestment] = useState("");
  const [incomeList, setIncomeList] = useState([]); // ✅ Ensure it's always an array
  const [loading, setLoading] = useState(false);

  const API_URL = "http://localhost:5000/api/income";

  useEffect(() => {
    if (!month) return;

    const fetchIncome = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Unauthorized! Please login.");
        return;
      }

      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/get?month=${month}`, {
          method: "GET",
          headers: { "Authorization": `Bearer ${token}` },
        });

        const data = await response.json();
        if (response.ok) {
          setIncomeList(Array.isArray(data.incomeList) ? data.incomeList : []);
        } else {
          alert(data.message || "Failed to fetch income.");
        }
      } catch (error) {
        console.error("Error fetching income:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchIncome();
  }, [month]);

  // ✅ Add income details locally
  const handleAddIncome = () => {
    if (!source || !amount || !investment) {
      alert("Please fill all fields");
      return;
    }

    const newIncome = { source, amount: parseFloat(amount) || 0, investment };
    setIncomeList((prevList) => [...prevList, newIncome]);

    // Clear input fields after adding
    setSource("");
    setAmount("");
    setInvestment("");
  };

  // ✅ Save income to backend
  const handleSaveIncome = async () => {
    if (!month || incomeList.length === 0) {
      alert("Please select a month and add income details.");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Unauthorized! Please login.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ month, incomeList }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Income saved successfully!");
      } else {
        alert(data.message || "Failed to save income.");
      }
    } catch (error) {
      console.error("Error saving income:", error);
      alert("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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

      <div className="total-income">
        Total Income for {month || "selected month"}: Rs
        {incomeList.length > 0 ? incomeList.reduce((sum, item) => sum + (item.amount || 0), 0) : 0}
      </div>

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
        <input
          type="number"
          placeholder="Enter amount"
          className="input-field"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

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
          {incomeList.length > 0 ? (
            incomeList.map((income, index) => (
              <tr key={index}>
                <td>{income.source || "N/A"}</td>
                <td>Rs{income.amount || 0}</td>
                <td>{income.investment || "N/A"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>No income added</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="buttons">
        <button className="back-btn">Back</button>
        <button className="save-btn" onClick={handleSaveIncome} disabled={loading}>
          {loading ? "Saving..." : "Save"}
        </button>
      </div>
    </div>
  );
};

export default MonthlyIncome;
