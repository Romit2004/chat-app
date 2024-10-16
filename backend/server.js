import { app } from "./app.js";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";


import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"


import connectDB from "./db/connectDB.js";
import express from "express";

const PORT = process.env.PORT || 5000
console.log(PORT)

dotenv.config();



app.get("/", (req,res) => {
    res.send("Hello World hi");
})

app.use(express.json()); //to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());



app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server is running at : ${PORT}`);
})