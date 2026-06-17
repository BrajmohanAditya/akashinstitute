import React, { useMemo } from 'react';

const ResultUI = ({ questions = [], userAnswers = {}, negativeMark = 0 }) => {
  // We use useMemo to calculate the marks only once when the component loads
  const { totalScore, correctCount, wrongCount, unattemptedCount } = useMemo(() => {
    let score = 0;
    let correct = 0;
    let wrong = 0;
    let unattempted = 0;

    questions.forEach((q) => {
      const userAnswerIndex = userAnswers[q._id];

      // 1. Check if unattempted
      if (userAnswerIndex === undefined || userAnswerIndex === null) {
        unattempted++;
        return;
      }

      // 2. Find which option is actually the correct one
      const correctOptionIndex = q.options.findIndex((opt) => opt.isCorrect);

      // 3. Compare user's answer with the correct answer
      if (userAnswerIndex === correctOptionIndex) {
        correct++;
        score += q.marks || 1; // Add marks (defaults to 1 if not set in DB)
      } else {
        wrong++;
        score -= negativeMark || 0; // Deduct negative marks
      }
    });

    return { totalScore: score, correctCount: correct, wrongCount: wrong, unattemptedCount: unattempted };
  }, [questions, userAnswers, negativeMark]);

  return (
    <div className="flex items-center justify-center h-full min-h-[500px] w-full bg-slate-50 font-sans p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-[#158993] mb-2">Test Submitted!</h1>
        <p className="text-slate-500 mb-8">Your answers have been saved successfully.</p>
        
        <h2 className="text-xl font-bold text-slate-800 mb-6 text-left border-b pb-2">Your Performance</h2>
        
        <div className="space-y-3 text-left">
          {/* Total Score */}
          <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg border border-slate-100">
            <span className="text-slate-600 font-medium">Total Score</span>
            <span className="font-bold text-[#158993] text-2xl">{totalScore}</span>
          </div>

          {/* Correct */}
          <div className="flex justify-between items-center bg-green-50 p-3 rounded-lg border border-green-100">
            <span className="text-green-700 font-medium">Correct Answers</span>
            <span className="font-bold text-green-600 text-lg">{correctCount}</span>
          </div>

          {/* Wrong */}
          <div className="flex justify-between items-center bg-red-50 p-3 rounded-lg border border-red-100">
            <span className="text-red-700 font-medium">Wrong Answers</span>
            <span className="font-bold text-red-500 text-lg">{wrongCount}</span>
          </div>

          {/* Unattempted */}
          <div className="flex justify-between items-center bg-slate-100 p-3 rounded-lg border border-slate-200">
            <span className="text-slate-600 font-medium">Unattempted</span>
            <span className="font-bold text-slate-500 text-lg">{unattemptedCount}</span>
          </div>
        </div>

        <button 
          className="mt-8 w-full bg-[#158993] hover:bg-teal-700 text-white font-bold py-3 rounded-lg transition-colors shadow-md"
          onClick={() => window.location.href = '/'} // Redirect to home or dashboard
        >
          Return Home
        </button>
      </div>
    </div>
  );
};

export default ResultUI;
