import React, { useState } from "react";
import "./styles.css";

const PersonalizedFinancialAdvice = () => {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you manage your budget today?" }
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (query.trim() === "") return;

    // Append user's message
    const userMessage = { sender: "user", text: query };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate a delayed bot response (replace with actual API call in production)
    setTimeout(() => {
      const botResponse = {
        sender: "bot",
        text: "Thank you for your question. Here’s some personalized advice tailored to your situation: [Your tailored advice here]."
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);

    setQuery("");
  };

  return (
    <div className="advice-container">
      <h2 className="title">Personalized Financial Advice</h2>
      <p>
        Our AI-based solution supports single mothers in managing their budgets by offering personalized budgeting plans, tracking expenses, and providing tailored financial advice. Ask any financial question below!
      </p>

      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`chat-message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <form className="chat-input" onSubmit={handleSend}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask your financial question..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default PersonalizedFinancialAdvice;
