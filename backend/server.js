import express from 'express';
import * as dotenv from 'dotenv';
import connectDb from './utils/database/connectdb.js';
import {userRoute} from './routers/index.js'
import cors from 'cors';
dotenv.config();
connectDb();
const port = process.env.PORT || 7000;
const app = express();
app.use(cors());
app.use(express.json())
app.use("/user",userRoute)
app.listen(port,()=>console.log(`server is running at port ${port}`))