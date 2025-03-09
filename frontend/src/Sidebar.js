import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"; // Separate CSS for styling

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li onClick={() => navigate("/dashboard")}>Dashboard</li>
        <li onClick={() => navigate("/user-profile")}>User Profile</li>
        <li onClick={() => navigate("/budget-plan")}>Budget Plan</li>
        <li onClick={() => navigate("/financial-advice")}>Financial Advice</li>
      </ul>
    </div>
  );
};

export default Sidebar;
