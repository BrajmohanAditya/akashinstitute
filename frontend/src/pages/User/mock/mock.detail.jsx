import React from "react";
import { FileText, Clock, Globe, CircleDot } from "lucide-react";

const MockDetail = () => {
  // Dummy data array to render multiple cards like the screenshot
  const mockTests = [
    {
      id: 1,
      title: "IBPS PO (Current Affairs Special): Mini Live Test",
      questions: 20,
      time: 8,
      marks: 20,
      startTime: "10 Jun, 9:00",
      endTime: "12 Jun, 21:00",
      buttonText: "Start Now",
      buttonColor: "bg-[#00c2e0] hover:bg-[#00a8c2]",
      languages: "English, Hindi",
      isLive: true,
      isFree: true,
    },
    {
      id: 2,
      title: "IBPS PO Prelims - (Intelligence Ignition): Mini Live Test",
      questions: 30,
      time: 20,
      marks: 30,
      startTime: "10 Jun, 9:00",
      endTime: "12 Jun, 21:00",
      buttonText: "Start Now",
      buttonColor: "bg-[#00c2e0] hover:bg-[#00a8c2]",
      languages: "English, Hindi",
      isLive: true,
      isFree: true,
    },
    {
      id: 3,
      title: "IBPS Clerk Prelims - (Exam Empowerment): Mini Live Test",
      questions: 30,
      time: 20,
      marks: 30,
      startTime: "12 Jun, 9:00",
      endTime: "14 Jun, 21:00",
      buttonText: "Register",
      buttonColor: "bg-[#2dd46c] hover:bg-[#25bc5e]", // Green button for register
      languages: "English, Hindi",
      isLive: false, // Just an outlined live tag like the screenshot
      isFree: true,
    },
  ];

  return (
    <div className="p-8 min-h-screen bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockTests.map((test) => (
          <div
            key={test.id}
            className="bg-white rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-slate-100 overflow-hidden flex flex-col transition-transform hover:-translate-y-1 duration-300"
          >
            <div className="p-5 flex-grow">
              {/* Badges */}
              <div className="flex gap-2 mb-4">
                {test.isLive ? (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#ff1053] text-white text-[11px] font-bold tracking-wide">
                    <CircleDot className="w-2.5 h-2.5 fill-white" />
                    LIVE TEST
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded border border-[#ff1053] text-[#ff1053] text-[11px] font-bold tracking-wide">
                    <CircleDot className="w-2.5 h-2.5 fill-[#ff1053]" />
                    LIVE TEST
                  </span>
                )}
                
                {test.isFree && (
                  <span className="inline-flex items-center px-2.5 py-1 rounded bg-[#2dd46c] text-white text-[11px] font-bold tracking-wide">
                    FREE
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-[16px] font-bold text-slate-800 leading-snug mb-5">
                {test.title}
              </h3>

              {/* Test Details */}
              <div className="flex items-center gap-2 text-[13px] text-slate-500 font-medium mb-4">
                <FileText className="w-4 h-4 text-slate-400" />
                <span>{test.questions} Questions</span>
                <span className="text-slate-300">|</span>
                <span>{test.time} Mins.</span>
                <span className="text-slate-300">|</span>
                <span>{test.marks} Marks</span>
              </div>

              {/* Schedule and Action Button */}
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-2 text-[13px] text-slate-500 font-medium">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>
                    {test.startTime} to {test.endTime}
                  </span>
                </div>
                <button
                  className={`px-5 py-2 rounded text-white text-sm font-semibold transition-colors shadow-sm ${test.buttonColor}`}
                >
                  {test.buttonText}
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-[#f8f9fc] px-5 py-3 border-t border-slate-100 flex items-center gap-2">
              <div className="flex items-center justify-center w-5 h-5 rounded bg-blue-100 text-blue-600">
                <Globe className="w-3 h-3" />
              </div>
              <span className="text-[13px] font-medium text-[#158993]">
                {test.languages}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MockDetail;
