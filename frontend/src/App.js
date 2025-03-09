import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import ProfessionalDashboard from "./ProfessionalDashboard";
import MonthlyIncome from "./MonthlyIncome";
import CurrentSavings from "./CurrentSavings";
import FinancialGoals from "./FinancialGoals";
import BudgetAllocation from "./BudgetAllocation";
import UserProfile from "./UserProfile";
import ExpenseTracking from "./ExpenseTracking";
import BudgetPlan from "./BudgetPlan";
import PersonalizedFinancialAdvice from "./PersonalizedFinancialAdvice"; // New
import Sidebar from "./Sidebar";

import "./styles.css";

// Function to dynamically update the page title
const usePageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "Login - Budget Planner",
      "/register": "Register - Budget Planner",
      "/dashboard": "Dashboard - Budget Planner",
      "/monthly-income": "Monthly Income - Budget Planner",
      "/current-savings": "Current Savings - Budget Planner",
      "/financial-goals": "Financial Goals - Budget Planner",
      "/budget-allocation": "Budget Allocation - Budget Planner",
      "/user-profile": "User Profile - Budget Planner",
      "/budget-plan": "Budget Plan - Budget Planner",
      "/expense-tracking": "Expense Tracking - Budget Planner",
      "/financial-advice": "Financial Advice - Budget Planner",
    };

    document.title = titles[location.pathname] || "Budget Planner";
  }, [location]);
};

function App() {
  return (
    <Router>
      <PageRoutes />
    </Router>
  );
}

const PageRoutes = () => {
  usePageTitle(); // Update the page title based on route
  const location = useLocation();

  // Show sidebar on all pages except login and register
  const showSidebar = location.pathname !== "/" && location.pathname !== "/register";

  return (
    <div className="app-container">
      {showSidebar && <Sidebar />} {/* Sidebar visible only after login */}
      <div className={showSidebar ? "content-with-sidebar" : "content-full"}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<ProfessionalDashboard />} />
          <Route path="/monthly-income" element={<MonthlyIncome />} />
          <Route path="/current-savings" element={<CurrentSavings />} />
          <Route path="/financial-goals" element={<FinancialGoals />} />
          <Route path="/budget-allocation" element={<BudgetAllocation />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/budget-plan" element={<BudgetPlan />} />
          <Route path="/expense-tracking" element={<ExpenseTracking />} />
          <Route path="/financial-advice" element={<PersonalizedFinancialAdvice />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
