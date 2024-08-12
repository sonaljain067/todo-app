import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express(); 

dotenv.config()

app.use(express.json()); 
app.use(cors()); 

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB connect!!'))
.catch(err => console.log(err))

app.listen(8000, () => console.log(`Serving running on port: 8000`))

import taskRouter from "../routes/task.routes.js";
app.use('/api/v1/task', taskRouter)
