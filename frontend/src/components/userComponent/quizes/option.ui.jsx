import React, { useState } from "react";
import { Eye } from "lucide-react";

const OptionUI = ({ options, instruction }) => {
  const displayOptions = options || [];

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="flex flex-col pl-10 pt-10 w-full max-w-xl font-sans">
      {/* --- ADD THIS INSTRUCTION BLOCK --- */}
      {instruction && (
        <div className="text-slate-500 font-medium italic text-[15px] mb-6 p-3 rounded-md border border-slate-100">
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
              // Agar ye option select hua hai, toh isCorrect check karke accent color badlo
              className={`w-4 h-4 cursor-pointer ${
                selectedOption === index
                  ? opt.isCorrect
                    ? "accent-green-600"
                    : "accent-red-500"
                  : "accent-slate-500"
              }`}
              checked={selectedOption === index}
              onChange={() => setSelectedOption(index)}
            />

            {/* Text ka color bhi usi logic se badlo */}
            <span
              className={`text-[15px] ${
                selectedOption === index
                  ? opt.isCorrect
                    ? "text-green-600 font-bold"
                    : "text-red-500 font-bold"
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
