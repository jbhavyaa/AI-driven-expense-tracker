import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTachometerAlt, FaUser, FaMoneyBillWave, FaCommentDollar, FaSignOutAlt } from "react-icons/fa";
import "./styles.css";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Menu</h2>
      <ul>
        <li onClick={() => navigate("/dashboard")}>
          <FaTachometerAlt className="menu-icon" /> Dashboard
        </li>
        <li onClick={() => navigate("/user-profile")}>
          <FaUser className="menu-icon" /> User Profile
        </li>
        <li onClick={() => navigate("/budget-plan")}>
          <FaMoneyBillWave className="menu-icon" /> Budget Plan
        </li>
        <li onClick={() => navigate("/financial-advice")}>
          <FaCommentDollar className="menu-icon" /> Financial Advice
        </li>
        <li onClick={() => navigate("/")}>
          <FaSignOutAlt className="menu-icon" /> Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
