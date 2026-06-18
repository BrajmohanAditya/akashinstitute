import React, { useState } from "react";
import { Eye } from "lucide-react";

const OptionUI = ({ options, instruction, selectedOption, onSelectOption, isSubmitted }) => {
  const displayOptions = options || [];

  return (
    <div className="flex flex-col pl-10 pt-10 w-full max-w-xl font-sans">
      {/* --- ADD THIS INSTRUCTION BLOCK --- */}
      {instruction && (
        <div className="text-slate-500 font-medium italic text-[15px] mb-6 p-3 rounded-md ">
          {instruction}
        </div>
      )}

      <div className="space-y-4">
        {displayOptions.map((opt, index) => {
          const isSelected = selectedOption === index;
          const isCorrect = opt.isCorrect;

          let optionStyle = "text-slate-700";
          let bgColor = "bg-transparent";

          // Sahi aur Galat answer highlight karne ka logic
          if (isSubmitted) {
            if (isCorrect) {
              optionStyle = "text-green-700 font-bold";
              bgColor = "bg-green-100/50 rounded-lg px-3 py-2 border border-green-200";
            } else if (isSelected && !isCorrect) {
              optionStyle = "text-red-600 font-bold";
              bgColor = "bg-red-50 rounded-lg px-3 py-2";
            } else {
              bgColor = "px-3 py-2"; // default padding
            }
          } else if (isSelected) {
            optionStyle = "text-[#158993] font-bold";
          }

          return (
            <label
              key={index}
              className={`flex items-center space-x-4 ${isSubmitted ? "cursor-default" : "cursor-pointer group"}`}
            >
              <input
                type="radio"
                name="quiz-option"
                className={`w-4 h-4 accent-[#158993] ${isSubmitted ? "cursor-default opacity-60" : "cursor-pointer"}`}
                checked={isSelected}
                onChange={() => onSelectOption(index)}
                disabled={isSubmitted} // Disable input if submitted
              />

              <div className={`flex-1 ${bgColor}`}>
                <span className={`text-[15px] ${optionStyle}`}>
                  {opt.text}
                </span>
                
                {/* Labels dikhane ke liye */}
                {isSubmitted && isCorrect && <span className="ml-3 text-green-600 text-xs font-bold">(Correct)</span>}
                {isSubmitted && isSelected && !isCorrect && <span className="ml-3 text-red-500 text-xs font-bold">( Wrong)</span>}
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default OptionUI;
