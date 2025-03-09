import React, { useState } from "react";
import "./styles.css";

const UserProfile = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    monthlyIncome: "",
    monthlyExpenses: "",
    currentSavings: "",
    financialGoals: "",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Profile Data:", profile);
    alert("Profile saved successfully!");
    // Reset all fields
    setProfile({
      name: "",
      age: "",
      monthlyIncome: "",
      monthlyExpenses: "",
      currentSavings: "",
      financialGoals: "",
    });
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            className="input-field" 
            value={profile.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input 
            type="number" 
            name="age" 
            className="input-field" 
            value={profile.age} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Monthly Income:</label>
          <input 
            type="number" 
            name="monthlyIncome" 
            className="input-field" 
            value={profile.monthlyIncome} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Monthly Expenses:</label>
          <input 
            type="number" 
            name="monthlyExpenses" 
            className="input-field" 
            value={profile.monthlyExpenses} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Current Savings:</label>
          <input 
            type="number" 
            name="currentSavings" 
            className="input-field" 
            value={profile.currentSavings} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Financial Goals:</label>
          <textarea 
            name="financialGoals" 
            className="input-field" 
            value={profile.financialGoals} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit" className="save-btn">
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
