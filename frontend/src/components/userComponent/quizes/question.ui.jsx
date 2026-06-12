import React from "react";
import { AlertTriangle } from "lucide-react";

const QuestionUI = ({ children, question, questionNumber = 1 }) => {
  return (
    <div className="flex-1 flex flex-col border-r border-slate-200 bg-white">
      {/* 1. Question Header (Top Bar) */}
      <div className="h-14 border-b border-slate-200 flex items-center justify-between px-6 bg-white shrink-0">
        <div className="font-bold text-slate-800 text-base">
          Question No. {questionNumber}
        </div>

        <div className="flex items-center gap-8">
          {/* Marks */}
          <div className="flex flex-col items-center justify-center leading-tight">
            <span className="text-slate-500 text-xs font-medium">Marks</span>
            <div className="flex gap-1 mt-0.5">
              <span className="bg-green-600 text-white px-1.5 rounded-sm text-xs font-bold">
                +{question?.marks || 1}
              </span>
              <span className="bg-red-500 text-white px-1.5 rounded-sm text-xs font-bold">
                -0.25
              </span>
            </div>
          </div>

          {/* Time Limit placeholder */}
          <div className="flex flex-col items-center justify-center leading-tight">
            <span className="text-slate-500 text-xs font-medium">Time</span>
            <span className="font-mono text-sm font-semibold text-slate-700">
              00:00
            </span>
          </div>



          {/* Report Button */}
          <button className="flex items-center gap-1.5 text-slate-500 hover:text-slate-800 font-medium transition">
            <AlertTriangle className="w-4 h-4" /> Report
          </button>
        </div>
      </div>

      {/* 2. Main Question Body */}
      <div className="flex-1 flex flex-col overflow-y-auto custom-scrollbar p-8">
        {/* Question Content */}
        <div className="mb-8">
          <div className="text-slate-800 text-[16px] leading-relaxed font-medium whitespace-pre-wrap">
            {question?.questionText ||
              "No question text provided yet. Start typing to see it here!"}
          </div>

          {/* Question Image (If it exists in the database) */}
          {question?.questionImage && (
            <div className="mt-6 border border-slate-200 rounded-lg p-2 inline-block shadow-sm">
              <img
                src={question.questionImage}
                alt="Question Figure"
                className="max-w-full max-h-[300px] object-contain rounded"
              />
            </div>
          )}
        </div>

        {/* 3. Options Container (This is where option.ui.jsx will go later) */}
        <div className="mt-2 flex-1">{children}</div>
      </div>
    </div>
  );
};

export default QuestionUI;
