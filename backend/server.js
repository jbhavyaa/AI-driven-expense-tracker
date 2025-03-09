const express = require("express"); 
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const incomeRoutes = require("./routes/incomeRoutes");
//const expenseRoutes = require("./routes/expenseRoutes");

dotenv.config();
connectDB();

const app = express(); 
app.use(express.json());
app.use(cors());  

app.use("/api/auth", authRoutes);
app.use("/api/income", incomeRoutes);
//app.use("/api/expenses", expenseRoutes);

const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
