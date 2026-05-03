import express from 'express';
import { connectDB } from './src/config/db.js';
import { ENV } from './src/config/env.js';
import cookieParser from 'cookie-parser';
import userRoute from './src/routes/user.route.js';

const app = express(); 
 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use('/api', userRoute)

app.listen(ENV.PORT, () => {
  console.log(`Server running on port ${ENV.PORT}`);
  connectDB();
});
 

