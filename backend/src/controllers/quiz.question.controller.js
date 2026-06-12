import { QuizQuestion } from "../models/quiz.question.model.js";
import { Quiz } from "../models/quiz.model.js";

// Create a new quiz question
export const createQuizQuestion = async (req, res) => {
  try {
    const {
      quizId,
      sectionName,
      questionText,
      marks,
      options,
      solutionExplanation,
    } = req.body;

    // 1. Basic validation
    if (
      !quizId ||
      !sectionName ||
      !questionText ||
      !options ||
      options.length === 0
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Please provide all required fields including quizId, sectionName, questionText, and options.",
      });
    }

    // 2. Verify if the Quiz exists
    const quizExists = await Quiz.findById(quizId);
    if (!quizExists) {
      return res.status(404).json({
        success: false,
        message: "Quiz not found",
      });
    }

    // 3. Create the Question
    const newQuestion = await QuizQuestion.create({
      quizId,
      sectionName,
      questionText,
      marks: marks || 1,
      options, // Ensure the frontend sends options array with { text, isCorrect, image }
      solutionExplanation,
    });

    return res.status(201).json({
      success: true,
      message: "Question added successfully",
      question: newQuestion,
    });
  } catch (error) {
    console.error(`Error from create quiz question: ${error}`);
    return res.status(500).json({
      success: false,
      message: "Internal server error while creating question",
    });
  }
};

// Get all questions for a specific quiz
export const getQuizQuestions = async (req, res) => {
  try {
    const { quizId } = req.params;

    const questions = await QuizQuestion.find({ quizId });

    return res.status(200).json({
      success: true,
      questions,
    });
  } catch (error) {
    console.error(`Error fetching quiz questions: ${error}`);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
