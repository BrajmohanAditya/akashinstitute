import React from 'react';

const QuestionButtonUI = ({ 
  sectionName = "Unknown Section", 
  questions = [], 
  currentQuestionIndex = 0, 
  onQuestionClick 
}) => {
  return (
    <div className="w-full bg-[#dcf0fa] flex flex-col font-sans h-full border-l border-slate-200">
      {/* Header */}
      <div className="bg-[#bce0f2] px-4 py-2.5">
        <span className="font-bold text-slate-800 text-sm">SECTION : </span>
        <span className="text-slate-700 text-sm">{sectionName}</span>
      </div>

      {/* Grid of Buttons */}
      <div className="p-4 grid grid-cols-5 gap-3 overflow-y-auto custom-scrollbar">
        {questions.map((_, index) => {
          const isActive = currentQuestionIndex === index;
          return (
            <button
              key={index}
              onClick={() => onQuestionClick && onQuestionClick(index)}
              className={`flex items-center justify-center border border-slate-800 bg-white hover:bg-slate-100 transition-all text-[15px] h-9 w-full ${
                isActive ? "rounded-[50%] font-semibold" : "rounded-sm"
              }`}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionButtonUI;
