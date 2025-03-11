const express = require("express"); 
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const incomeRoutes = require("./routes/incomeRoutes");
const savingsRoutes = require("./routes/savingsRoutes");
const userRoutes = require("./routes/userRoutes");
const goalRoutes = require("./routes/goalRoutes");
const budgetRoutes = require("./routes/budgetRoutes");
dotenv.config();
connectDB();

const app = express(); 
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());  

app.use("/api/auth", authRoutes);
app.use("/api/income", incomeRoutes);
app.use("/api/savings", savingsRoutes);
app.use("/api/goals", goalRoutes);
app.use("/api/budget", budgetRoutes);
app.use("/api/user/history/:userId", userRoutes);

const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
