import express from "express";
import { isAdmin, isLoggedIn } from "../middlewares/auth.middleware.js";
import {
  createQuiz,
  getQuizzes,
  getQuizById,
  updateQuiz,
  deleteQuiz
} from "../controllers/quiz.controller.js";
import upload from "../middlewares/multer.js";

const quizRoute = express.Router();

// Notice we add isLoggedIn and adminRoute to protect the creation route!
quizRoute.post("/create",upload.single("logo"),isLoggedIn, isAdmin, createQuiz);
quizRoute.get("/getQuizzes", getQuizzes);
quizRoute.get("/getQuiz/:id", getQuizById);
quizRoute.put("/update/:id", isLoggedIn, isAdmin, updateQuiz);
quizRoute.delete("/delete/:id", isLoggedIn, isAdmin, deleteQuiz);

export default quizRoute;
