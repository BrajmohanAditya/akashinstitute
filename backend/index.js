import express from 'express';
import { connectDB } from './src/config/db.js';
import { ENV } from './src/config/env.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import userRoute from './src/routes/user.route.js';
import courseRoute from './src/routes/course.route.js';
const app = express(); 
 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: ENV.CLIENT_URL || 'http://localhost:5173',
    credentials: true
}));

app.use('/api', userRoute)
app.use('/api/course', courseRoute)

app.listen(ENV.PORT, () => {
  console.log(`Server running on port ${ENV.PORT}`);
  connectDB();
});
 

