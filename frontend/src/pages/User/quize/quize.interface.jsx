import React, { useState } from "react";
import { User, AlertTriangle, Maximize } from "lucide-react";
import { useGetQuizByIdHook } from "@/hooks/quiz.hook";
import QuestionUi from "@/components/userComponent/quizes/question.ui.jsx";
import { useParams } from "react-router-dom";
import { useGetQuizQuestionsHook } from "@/hooks/quiz.createQuest.hook.js";
import OptionUI from "@/components/userComponent/quizes/option.ui.jsx";
const QuizeInterface = () => {
  const { id } = useParams(); // 1. Get the ID from the URL!
  // 2. Fetch only the specific quiz using that ID
  const { data: quizData, isLoading, isError } = useGetQuizByIdHook(id);
  const currentQuiz = quizData?.quiz;

  // 3. Automatically get questions for this ID
  const { data: questions } = useGetQuizQuestionsHook(id);
  const [activeSection, setActiveSection] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // 4. Automatically select the first section dynamically
  React.useEffect(() => {
    if (currentQuiz?.section?.length > 0 && !activeSection) {
      setActiveSection(currentQuiz.section[0].name);
    }
  }, [currentQuiz, activeSection]);

  // 5. Filter questions by active section and pick the current one
  const sectionQuestions =
    questions?.questions?.filter((q) => q.sectionName === activeSection) || [];
  const currentQuestion = sectionQuestions[currentQuestionIndex];

  // Reset to first question whenever the user switches sections
  React.useEffect(() => {
    setCurrentQuestionIndex(0);
  }, [activeSection]);
  return (
    <div className="h-screen flex flex-col bg-white text-sm font-sans select-none overflow-hidden">
      {/* Step 1: Top Header */}
      <header className="h-14 border-b flex items-center justify-between px-4">
        <div className="font-semibold text-slate-700 text-base">
          {currentQuiz?.nameOfExam}
        </div>

        <div className="flex items-center gap-3 bg-slate-100 px-4 py-1.5 rounded-md shadow-sm">
          <span className="font-bold text-slate-800">Total Time:</span>
          <div className="flex gap-1.5 text-white font-mono font-bold">
            <span className="bg-slate-500 px-2 py-0.5 rounded text-sm shadow-inner">
              {currentQuiz?.duration
                ? `${currentQuiz.duration} Mins`
                : "0 Mins"}
            </span>
          </div>
        </div>

        <button className="flex items-center gap-2 border border-[#158993] text-[#158993] px-4 py-1.5 rounded font-medium hover:bg-teal-50 transition">
          <Maximize className="w-4 h-4" /> Switch Full Screen
        </button>
      </header>
      {/* Sections Bar */}
      <div className="h-11 border-b flex items-center px-4 bg-white gap-4">
        <span className="font-semibold text-slate-500 text-xs tracking-wider">
          SECTIONS
        </span>

        {currentQuiz?.section?.map((sec) => (
          <button
            key={sec._id || sec.name}
            className={` cursor-pointer px-5 py-2.5 rounded-t-lg font-medium transition ${
              activeSection === sec.name
                ? "bg-[#158993] text-white shadow-md"
                : "text-slate-600 hover:bg-slate-100"
            }`}
            onClick={() => setActiveSection(sec.name)}
          >
            {sec.name}
          </button>
        ))}
      </div>

      <div className="h-14 border-b border-slate-200 flex items-center justify-between px-6 bg-white shrink-0">
        <div className="font-bold text-slate-800 text-base">
          Question No. {currentQuestionIndex + 1}
        </div>

        <div className="flex items-center gap-8">
          {/* Marks */}
          <div className="flex flex-col items-center justify-center leading-tight">
            <span className="text-slate-500 text-xs font-medium">Marks</span>
            <div className="flex gap-1 mt-0.5">
              <span className="bg-green-600 text-white px-1.5 rounded-sm text-xs font-bold">
                +{currentQuestion?.marks || 1}
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

      {/* Main Content Area */}
      <div className="flex-1 bg-white flex text-slate-800">
        <div className="flex-1 border-r border-slate-200 bg-white">
          {/* Render the Question UI */}
          <QuestionUi question={currentQuestion} />
        </div>
        <div className="flex-1 bg-white">
          {/* Render the Option UI */}
          <OptionUI options={currentQuestion?.options} />
        </div>
      </div>
    </div>
  );
};

export default QuizeInterface;
