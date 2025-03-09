# AI-Driven Budget Planner for Single Mothers

## Overview
Single mothers often face unique financial challenges, including limited income, unexpected expenses, and the responsibilities of parenting. These pressures can make budgeting and financial planning difficult, leading to stress and uncertainty about their financial future. Many budgeting tools are not designed with the specific needs of single parents in mind, overlooking the complexities of managing finances while caring for children.

## Solution: AI-Driven Budget Planner
The **AI-Driven Budget Planner** is a **web-based application** designed to help single mothers efficiently manage their budgets. The platform provides:
- **Dashboard:** A centralized hub for financial overview.
- **Budget Planning:** Tools to create and manage budgets.
- **Expense Tracking:** Track and categorize expenses.
- **Chatbot:** AI-powered assistant for personalized financial advice.
- **User Profile:** Personalized settings and progress tracking.

## Features
- **Effective budget planning and expense tracking**
- **Personalized financial advice based on user data**
- **User-friendly and intuitive interface**
- **Secure handling of financial data**
- **Integration of AI-powered chatbot for recommendations**

## Tech Stack
### Frontend:
- HTML, CSS, JavaScript
- React.js for responsive and dynamic UI

### Backend:
- Node.js
- Express.js for API development

### Database:
- MongoDB for storing user financial data

### AI Integration:
- OpenRouter API for chatbot functionality

### API Testing:
- Postman for testing endpoints

### Security:
- OAuth2.0, JWT for authentication
- SSL/TLS encryption for secure data transmission

## Architecture
1. **User interacts with the frontend.**
2. **Backend handles data processing and storage.**
3. **AI chatbot provides real-time financial advice.**

## Sample Input Data
```json
{
  "user_id": "U1001",
  "name": "Alice Johnson",
  "age": 32,
  "monthly_income": 4000,
  "monthly_expenses": 3500,
  "current_savings": 5000,
  "financial_goals": ["Emergency fund", "Child's education"]
}
```

## Sample Output Data
```json
{
  "user_id": "U1001",
  "current_month_expenses": 3500,
  "recommended_budget": {
    "Groceries": 400,
    "Utilities": 200,
    "Rent": 1200,
    "Transportation": 150,
    "Savings": 500,
    "Miscellaneous": 550
  },
  "advice": [
    "Reduce grocery expenses by 10%",
    "Consider switching to a cheaper utility provider"
  ]
}
```

## Future Enhancements
- **Integration with Banking APIs:** Automatically sync transactions for real-time expense tracking.
- **Multilingual Support:** Add support for multiple languages to reach a wider audience.
- **Mobile App:** Develop a mobile app for on-the-go access.
- **Resource Hub:** Provide links to government assistance programs, financial planning tools, and educational resources.
- **Advanced Analytics:** Use machine learning to provide predictive insights (e.g., future expenses, savings goals).

## Getting Started
### Prerequisites
- Node.js installed
- MongoDB set up

### Installation
```sh
git clone https://github.com/yourusername/ai-budget-planner.git
cd ai-budget-planner
npm install
```

### Running the Application
```sh
npm start
```

## Contributors
- Rubana P
- Bhavya Jamar
- Aditi Kukreti
- Suhani Bansal

## License
This project is licensed under the MIT License.

---
This AI-Driven Budget Planner aims to provide financial stability and guidance to single mothers through AI-powered insights and budgeting tools. 🚀
