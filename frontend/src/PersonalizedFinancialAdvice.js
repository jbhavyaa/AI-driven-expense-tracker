// FinancialAdvice.js
import React from "react";
import "./styles.css";

const PersonalizedFinancialAdvice = () => {
  return (
    <div className="advice-container">
      <h2 className="title">Personalized Financial Advice</h2>
      <p>
        Our AI-based solution supports single mothers in managing their budgets.
        Chat with our budgeting assistant below!
      </p>
      <iframe
        src="/chatbot.html"  // Reference the file in your public folder
        title="Budgeting Chatbot"
        style={{
          width: "350px",
          height: "500px",
          border: "none",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          margin: "auto",
          display: "block"
        }}
      />
    </div>
  );
};

export default PersonalizedFinancialAdvice;
