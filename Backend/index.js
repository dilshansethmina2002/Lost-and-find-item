import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './router/userRouter.js';
import authjwt from './middleware/auth.js';
import foundItemsRouter from './router/foundItemsRouter.js';
import lostItemsRouter from './router/lostItemsRouter.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
// Middleware 
app.use(cors())
app.use(bodyParser.json());

app.use(authjwt)



// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL).then
(() => {
    console.log("Connected to the Database");
}).catch((err) => {
    console.error("MongoDB connection error:", err);
});



app.use("/api/user", userRouter);
app.use("/api/lost/", lostItemsRouter);
app.use("/api/found/", foundItemsRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

