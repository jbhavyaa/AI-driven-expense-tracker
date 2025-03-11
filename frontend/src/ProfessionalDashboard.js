import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar"; // Import Sidebar
import "./styles.css";

const ProfessionalDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <Sidebar /> {/* Add Sidebar Component */}
      <div className="dashboard-content">
        <h1>SheBudget</h1>

        <div className="dashboard-grid">
          <div className="dashboard-box" onClick={() => navigate("/monthly-income")}>
            <h3>📊 Monthly Income and Expenses</h3>
            <p>Track your income and expenses for better budgeting.</p>
          </div>

          <div className="dashboard-box" onClick={() => navigate("/current-savings")}>
            <h3>💰 Current Savings</h3>
            <p>Monitor your savings and plan for the future.</p>
          </div>

          <div className="dashboard-box" onClick={() => navigate("/financial-goals")}>
            <h3>🎯 Financial Goals Progress</h3>
            <p>Set financial goals and track your progress.</p>
          </div>

          <div className="dashboard-box" onClick={() => navigate("/budget-allocation")}>
            <h3>🏦 Budget Allocation</h3>
            <p>Allocate budgets for different categories to manage expenses.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDashboard;
