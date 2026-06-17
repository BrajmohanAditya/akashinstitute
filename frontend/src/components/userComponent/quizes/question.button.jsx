import React from "react";

const QuestionButtonUI = ({
  sectionName = "Unknown Section",
  questions = [],
  currentQuestionIndex = 0,
  onQuestionClick,
}) => {
  return (
    <div className="w-full bg-[#dcf0fa] flex flex-col font-sans h-full border-l border-slate-200 min-h-0">
      {/* Header */}
      <div className="bg-[#bce0f2] px-4 py-2.5 shrink-0">
        <span className="font-bold text-slate-800 text-sm">SECTION : </span>
        <span className="text-slate-700 text-sm">{sectionName}</span>
      </div>

      {/* Grid of Buttons */}
      <div className="flex-1 p-4 grid grid-cols-5 gap-3 overflow-y-auto custom-scrollbar content-start">
        {questions.map((_, index) => {
          const isActive = currentQuestionIndex === index;
          return (
            <button
              key={index}
              onClick={() => onQuestionClick && onQuestionClick(index)}
              className={`flex cursor-pointer items-center justify-center border border-slate-800 bg-white hover:bg-slate-100 transition-all text-[15px] h-9 w-full ${
                isActive ? "rounded-[35%] font-semibold" : ""
              }`}
            >
              {index + 1}
            </button>
          );
        })}
      </div>

      {/* Footer / Action Buttons */}
      <div className="shrink-0 flex flex-col gap-2 p-3 border-t border-[#bce0f2]">
        <button className="w-full bg-[#24bcd4] hover:bg-[#1ba8be] text-white py-2 rounded-sm text-sm font-medium transition-colors shadow-sm">
          Submit Test
        </button>
      </div>
    </div>
  );
};

export default QuestionButtonUI;
