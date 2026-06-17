import React, { useState } from "react";
import { Eye } from "lucide-react";

const OptionUI = ({ options, instruction , selectedOption, onSelectOption}) => {
  const displayOptions = options || [];


  return (
    <div className="flex flex-col pl-10 pt-10 w-full max-w-xl font-sans">
      {/* --- ADD THIS INSTRUCTION BLOCK --- */}
      {instruction && (
        <div className="text-slate-500 font-medium italic text-[15px] mb-6 p-3 rounded-md ">
          {instruction}
        </div>
      )}

      <div className="space-y-8">
        {displayOptions.map((opt, index) => (
          <label
            key={index}
            className="flex items-center space-x-4 cursor-pointer group"
          >
            <input
              type="radio"
              name="quiz-option"
              className="w-4 h-4 cursor-pointer accent-[#158993]"
              checked={selectedOption === index}
              onChange={() => onSelectOption(index)}
            />

            {/* Text ka color bhi usi logic se badlo */}
            <span
              className={`text-[15px] ${
                selectedOption === index
                  ? "text-[#158993] font-bold"
                  : "text-slate-700"
              }`}
            >
              {opt.text}
            </span>

          </label>
        ))}
      </div>
    </div>
  );
};

export default OptionUI;
