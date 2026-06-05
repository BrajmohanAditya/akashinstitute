import express from "express";
import { createQuizQuestion } from "../controllers/quiz.question.controller.js";

const router = express.Router();

router.post("/create", createQuizQuestion);

export default router;
