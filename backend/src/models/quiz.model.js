import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
    },
    numberOfQuestions: {
      type: Number,
      required: true,
    },
    quizCategory: {
      type: String,
      required: true,
      trim: true,
    },
    quizName: {
      type: String,
      required: true,
      trim: true,
    },
    duration: {
      type: Number,
      required: true, // Duration in minutes
    },
    categories: [categorySchema],
    negativeMark: {
      type: Number,
      required: true,
      default: 0, // e.g. 0.25
    },
  },
  {
    timestamps: true,
  },
);

export const Quiz = mongoose.model("Quiz", quizSchema);
