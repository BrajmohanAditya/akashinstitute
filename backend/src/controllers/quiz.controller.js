import { Quiz } from "../models/quiz.model.js";

// Create a new quiz
export const createQuiz = async (req, res) => {
  try {
    const { nameOfExam, quizName, duration, negativeMark, section, noOfQueation } = req.body;

    if (!nameOfExam || !quizName || !duration || !section || !noOfQueation) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newQuiz = new Quiz({
      nameOfExam,
      quizName,
      duration,
      negativeMark: negativeMark || 0,
      section,
      noOfQueation,
    });

    await newQuiz.save();

    return res.status(201).json({
      success: true,
      message: "Quiz created successfully",
      quiz: newQuiz,
    });
  } catch (error) {
    console.log(`Error from create quiz: ${error}`);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// Get all quizzes
export const getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find({}).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      quizzes,
      count: quizzes.length,
    });
  } catch (error) {
    console.log(`Error from get quizzes: ${error}`);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// Get single quiz by id
export const getQuizById = async (req, res) => {
  try {
    const quizId = req.params.id;

    const quiz = await Quiz.findById(quizId);

    if (!quiz) {
      return res.status(404).json({
        success: false,
        message: "Quiz not found",
      });
    }

    return res.status(200).json({
      success: true,
      quiz,
    });
  } catch (error) {
    console.log(`Error from get quiz by id: ${error}`);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// Update quiz
export const updateQuiz = async (req, res) => {
  try {
    const quizId = req.params.id;
    const updateData = req.body;

    const updatedQuiz = await Quiz.findByIdAndUpdate(
      quizId,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!updatedQuiz) {
      return res.status(404).json({
        success: false,
        message: "Quiz not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Quiz updated successfully",
      quiz: updatedQuiz,
    });
  } catch (error) {
    console.log(`Error from update quiz: ${error}`);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// Delete quiz
export const deleteQuiz = async (req, res) => {
  try {
    const quizId = req.params.id;

    const deletedQuiz = await Quiz.findByIdAndDelete(quizId);

    if (!deletedQuiz) {
      return res.status(404).json({
        success: false,
        message: "Quiz not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Quiz deleted successfully",
    });
  } catch (error) {
    console.log(`Error from delete quiz: ${error}`);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
