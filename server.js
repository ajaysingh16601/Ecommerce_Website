import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from 'cors';

dotenv.config(); 

connectDB();

const app=express();

app.use(cors());
app.use(express.json())
app.use(morgan("dev"))

app.use("/api/v1/auth", authRoutes);

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to ecommerce app</h1>" );
});
 
const port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log(`Server Running on ${process.env.m_dev} mode on port ${port}`.bgYellow.white);
});
