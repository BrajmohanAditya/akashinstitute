import React, { useState } from "react";
import { Eye } from "lucide-react";

const OptionUI = ({ options }) => {
  const displayOptions = options || [];

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="flex flex-col space-y-10 pl-10 pt-10 w-full max-w-xl font-sans">
      {/* 1. Options List */}
      <div className="space-y-8">
        {displayOptions.map((opt, index) => (
          <label
            key={index}
            className="flex items-center space-x-4 cursor-pointer group"
          >
            <input
              type="radio"
              name="quiz-option"
              className="w-4 h-4 cursor-pointer accent-slate-500" // You can change accent color if needed
              checked={selectedOption === index}
              onChange={() => setSelectedOption(index)}
            />
            <span className="text-slate-700 text-[15px]">{opt.text}</span>
          </label>
        ))}
      </div>

      {/* 3. View Solution Section */}
      <div className="flex items-center space-x-3 pt-2">
        <button className="flex items-center space-x-2 border border-[#22b3c1] text-[#22b3c1] px-4 py-1.5 rounded-sm hover:bg-cyan-50 transition-colors">
          <Eye className="w-4 h-4" />
          <span className="text-sm font-medium">View Solution</span>
        </button>
      </div>
    </div>
  );
};

export default OptionUI;
