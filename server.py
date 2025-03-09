# server.py
from fastapi import FastAPI
import pymongo
import joblib
import pandas as pd
import numpy as np
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Securely fetch MongoDB credentials
MONGO_URI = os.getenv("MONGO_URI")

# Connect to MongoDB
client = pymongo.MongoClient(MONGO_URI)
db = client["budget_db"]
users_collection = db["users"]

# Load trained model & scaler
clf = joblib.load("budget_model.pkl")
scaler = joblib.load("scaler.pkl")

# Initialize FastAPI app
app = FastAPI()

# Function to fetch user_id from database using email
def get_user_id_from_db(email):
    user = users_collection.find_one({"email": email})
    return user["user_id"] if user else None

# Function to predict budget status
def predict_user_budget(user_id):
    # Get user expenses
    user_expenses = expense_summary[expense_summary["user_id"] == user_id]

    if user_expenses.empty:
        return {"error": "❌ User not found in dataset"}

    # Fetch recommended budget
    user_budget_data = budget_df[budget_df["user_id"] == user_id]
    if user_budget_data.empty:
        return {"error": "❌ Budget data not found for this user"}

    recommended_budget = user_budget_data["recommended_budget"].values[0]  # Extract dictionary
    category_results = []

    # Loop through categories to check overspending
    for category_col in [col for col in X.columns if col.startswith("category_")]:
        category_name = category_col.replace("category_", "")

        # Extract amount spent for this category
        category_expense = user_expenses[user_expenses[category_col] == 1] if category_col in user_expenses else pd.DataFrame()
        amount_spent = category_expense["amount"].sum() if not category_expense.empty else 0

        # Prepare input for prediction
        user_features = pd.DataFrame({"amount": [amount_spent]})
        category_cols = [col for col in X.columns if "category_" in col]
        user_category_data = pd.DataFrame(np.zeros((1, len(category_cols))), columns=category_cols)
        user_category_data[category_col] = 1

        # Merge numerical & category data
        input_features = pd.concat([user_features, user_category_data], axis=1)[X.columns]
        input_scaled = scaler.transform(input_features)

        # Predict overspending
        over_budget = clf.predict(input_scaled)[0]

        # Store result
        category_results.append({
            "category": category_name,
            "amount_spent": amount_spent,
            "recommended_budget": recommended_budget.get(category_name, "N/A"),
            "over_budget": bool(over_budget),
            "message": "⚠️ Over budget!" if over_budget else "✅ Within budget!"
        })

    return {
        "user_id": user_id,
        "budget_report": category_results
    }

# API to predict budget using email lookup
@app.get("/predict_budget/{email}")
async def predict_budget(email: str):
    user_id = get_user_id_from_db(email)
    if not user_id:
        return {"error": "❌ User not found in database"}
    return predict_user_budget(user_id)
