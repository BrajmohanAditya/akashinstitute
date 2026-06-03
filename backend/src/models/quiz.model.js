import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {

    nameOfExam: { // Banking, SSC , Railway
      type: String,
      required: true,
      trim: true,
    },
    quizName: {   // Set 1 , Set 2
      type: String,
      required: true,
      trim: true,
    },
    duration: {
      type: Number,
      required: true, // Duration in minutes
    },
    negativeMark: {
      type: Number,
      required: true,
      default: 0, // e.g. 0.25
    },
    section:{ // reasoning, english , math
      type: [String],
      required: true,
    },
    noOfQueation:{
      type: Number,
      required: true,
    }

  },
  {
    timestamps: true,
  },
);

export const Quiz = mongoose.model("Quiz", quizSchema);
