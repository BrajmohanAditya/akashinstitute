import React from "react";
import { FileQuestion, RefreshCw, BookOpen } from "lucide-react";

const QuizManagement = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div className="flex items-center gap-3">
          <FileQuestion className="w-8 h-8 text-indigo-600" strokeWidth={2.5} />
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Quiz Management
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              View and manage all quizzes
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm">
            <RefreshCw className="w-4 h-4" />
            Refresh
          </button>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg text-sm font-semibold text-white hover:from-violet-700 hover:to-indigo-700 transition-all shadow-md shadow-violet-200">
            <BookOpen className="w-4 h-4" />
            Create Quiz
          </button>
        </div>
      </div>

      {/* Main Content Area (Placeholder for now) */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-10 text-center min-h-[400px] flex flex-col items-center justify-center">
        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
          <FileQuestion className="w-8 h-8 text-slate-400" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-1">
          No quizzes yet
        </h3>
        <p className="text-sm text-slate-500 max-w-sm mb-6">
          Get started by creating your first quiz to evaluate your students.
        </p>
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm">
          <BookOpen className="w-4 h-4" />
          Create Your First Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizManagement;
