import express from 'express';
import { connectDB } from './src/config/db.js';
import { ENV } from './src/config/env.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import userRoute from './src/routes/user.route.js';
import courseRoute from './src/routes/course.route.js';
import moduleRoute from './src/routes/module.route.js';
import paymentRoute from "./src/routes/payment.route.js";
import heroRoutes from './src/routes/hero.route.js';
import quizRoute from './src/routes/quiz.route.js';
import quizQuestionRoute from './src/routes/quiz.question.route.js';

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
app.use('/api/module', moduleRoute)
app.use('/api/payment', paymentRoute)
app.use('/api/hero', heroRoutes);
app.use('/api/quiz', quizRoute);
app.use('/api/quizQuestion', quizQuestionRoute);

app.get('/',(req,res) => {
    res.send('Hello World!')
});

app.listen(ENV.PORT, () => {
  console.log(`Server running on port ${ENV.PORT}`);
  connectDB();
});
 

