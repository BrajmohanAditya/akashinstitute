import React, { useState } from "react";
import { User, AlertTriangle, Maximize } from "lucide-react";
// const { data, isLoading, isError } = useGetQuizzesHook();

// const MockInterface = () => {
//   // const [activeSection, setActiveSection] = useState('Reasoning');

//   // // Dummy question status for the grid
//   // // 0: Not Visited (white)
//   // // 1: Answered (green)
//   // // 2: Not Answered (red)
//   // // 3: Marked (purple)
//   // // 4: Marked and answered (purple with green dot)
//   // const questionStatus = [
//   //   1, 2, 0, 0, 0,
//   //   0, 0, 0, 0, 0,
//   //   0, 0, 0, 0, 0,
//   //   0, 0, 0, 0, 0
//   // ];

//   // const getStatusColor = (status) => {
//   //   switch(status) {
//   //     case 1: return 'bg-green-600 text-white border-green-600'; // Answered
//   //     case 2: return 'bg-red-500 text-white border-red-500'; // Not Answered
//   //     case 3: return 'bg-purple-600 text-white border-purple-600'; // Marked
//   //     case 4: return 'bg-purple-600 text-white border-purple-600 relative after:content-[""] after:w-2.5 after:h-2.5 after:bg-green-400 after:rounded-full after:absolute after:-bottom-1 after:-right-1 after:border-2 after:border-white'; // Marked & Answered
//   //     default: return 'bg-white text-slate-700 border-slate-300'; // Not Visited
//   //   }
//   // };

//   // const getStatusShape = (status) => {
//   //   return status !== 0 ? '50% 50% 0 0' : '4px';
//   // };

//   // return (
//   //   <div className="h-screen flex flex-col bg-white text-sm font-sans select-none overflow-hidden">
//   //     {/* Header */}
//   //     <header className="h-14 border-b flex items-center justify-between px-4">
//   //       <div className="font-semibold text-slate-700 text-base">RRB Clerk - (Skill Showdown): Mini Live Test</div>
//   //       <div className="flex items-center gap-3 bg-slate-100 px-4 py-1.5 rounded-md shadow-sm">
//   //         <span className="font-bold text-slate-800">Section Time</span>
//   //         <div className="flex gap-1.5 text-white font-mono font-bold">
//   //           <span className="bg-slate-500 px-1.5 py-0.5 rounded text-sm shadow-inner">00</span><span className="text-slate-500">:</span>
//   //           <span className="bg-slate-500 px-1.5 py-0.5 rounded text-sm shadow-inner">11</span><span className="text-slate-500">:</span>
//   //           <span className="bg-slate-500 px-1.5 py-0.5 rounded text-sm shadow-inner">27</span>
//   //         </div>
//   //       </div>
//   //       <button className="flex items-center gap-2 border border-[#158993] text-[#158993] px-4 py-1.5 rounded font-medium hover:bg-teal-50 transition">
//   //         <Maximize className="w-4 h-4" /> Switch Full Screen
//   //       </button>
//   //     </header>

//   //     {/* Sections Bar */}
//   //     <div className="h-11 border-b flex items-center px-4 bg-white gap-4">
//   //       <span className="font-semibold text-slate-500 text-xs tracking-wider">SECTIONS |</span>
//   //       <button
//   //         className={`px-5 py-2.5 rounded-t-lg font-medium transition ${activeSection === 'Reasoning' ? 'bg-[#158993] text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'}`}
//   //         onClick={() => setActiveSection('Reasoning')}
//   //       >
//   //         Reasoning
//   //       </button>
//   //       <button
//   //         className={`px-5 py-2.5 rounded-t-lg font-medium transition ${activeSection === 'Numerical Ability' ? 'bg-[#158993] text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'}`}
//   //         onClick={() => setActiveSection('Numerical Ability')}
//   //       >
//   //         Numerical Ability
//   //       </button>
//   //     </div>

//   //     {/* Main Content */}
//   //     <div className="flex-1 flex overflow-hidden">

//   //       {/* Left/Center Area - Question Area */}
//   //       <div className="flex-1 flex flex-col border-r border-slate-200">

//   //         {/* Question Header */}
//   //         <div className="h-14 border-b border-slate-200 flex items-center justify-between px-6 bg-white">
//   //           <div className="font-bold text-slate-800 text-base">Question No. 1</div>
//   //           <div className="flex items-center gap-8">
//   //             <div className="flex flex-col items-center justify-center leading-tight">
//   //               <span className="text-slate-500 text-xs font-medium">Marks</span>
//   //               <div className="flex gap-1 mt-0.5">
//   //                 <span className="bg-green-600 text-white px-1.5 rounded-sm text-xs font-bold">+1</span>
//   //                 <span className="bg-red-500 text-white px-1.5 rounded-sm text-xs font-bold">-0.25</span>
//   //               </div>
//   //             </div>
//   //             <div className="flex flex-col items-center justify-center leading-tight">
//   //               <span className="text-slate-500 text-xs font-medium">Time</span>
//   //               <span className="font-mono text-sm font-semibold text-slate-700">00:32</span>
//   //             </div>
//   //             <div className="flex items-center gap-2">
//   //               <span className="text-slate-600 font-medium">View in</span>
//   //               <select className="border border-slate-300 rounded px-3 py-1.5 text-slate-700 bg-white outline-none focus:border-[#158993]">
//   //                 <option>English and Hindi</option>
//   //                 <option>English</option>
//   //                 <option>Hindi</option>
//   //               </select>
//   //             </div>
//   //             <button className="flex items-center gap-1.5 text-slate-500 hover:text-slate-800 font-medium transition">
//   //               <AlertTriangle className="w-4 h-4" /> Report
//   //             </button>
//   //           </div>
//   //         </div>

//   //         {/* Question Content (Split View) */}
//   //         <div className="flex-1 flex overflow-hidden bg-white">

//   //           {/* Left Split - Comprehension */}
//   //           <div className="w-1/2 p-6 overflow-y-auto border-r border-slate-200 custom-scrollbar text-[15px] leading-relaxed">
//   //             <div className="mb-5 text-slate-700">
//   //               <span className="underline italic mr-2 font-medium">Comprehension:</span>
//   //               (Que No. 1 - 4)
//   //             </div>
//   //             <div className="mb-8 text-slate-800">
//   //               <strong className="font-bold">Direction:</strong> Study the following information to answer the given questions:
//   //               <br /><br />
//   //               Seven boxes A, B, C, D, E, F and G are kept one above another to form a stack. The topmost box is numbered as 1, the box below it as 2 and so on till the lowermost box as 7. Box B is two boxes above A. Number of boxes above box G is equal to number of boxes below box A. Box C is at most two boxes below box E. Box F is two boxes above box D and both are prime numbered box.
//   //             </div>

//   //             <div className="mb-4 text-slate-800">
//   //               <strong className="font-bold">निर्देश:</strong> दिए गए प्रश्नों का उत्तर देने के लिए निम्नलिखित जानकारी का अध्ययन कीजिये:
//   //               <br /><br />
//   //               बॉक्स का एक ढेर बनाने के लिए सात बॉक्स A, B, C, D, E, F और G को एक के ऊपर एक रखा जाता है। सबसे ऊपरी बॉक्स को 1 के रूप में गिना जाता है, इसके नीचे के बॉक्स को 2 के रूप में और इसी तरह सबसे निचले बॉक्स को 7 के रूप में गिना जाता है। बॉक्स B, बॉक्स A से दो बॉक्स ऊपर है। बॉक्स G के ऊपर बॉक्स की संख्या, बॉक्स A के नीचे बॉक्स की संख्या के बराबर है। बॉक्स C, बॉक्स E से अधिकतम दो बॉक्स नीचे है। बॉक्स F, बॉक्स D से दो बॉक्स ऊपर है और दोनों ही अभाज्य अंक से क्रमांकित बॉक्स हैं।
//   //             </div>
//   //           </div>

//   //           {/* Right Split - Question & Options */}
//   //           <div className="w-1/2 p-6 overflow-y-auto custom-scrollbar text-[15px]">
//   //             <div className="mb-6">
//   //               <span className="underline italic font-bold">Question:</span>
//   //               <div className="mt-2 text-slate-800 leading-relaxed font-medium">
//   //                 Which of the following box is just above box G?<br/>
//   //                 निम्नलिखित में से कौन सा बॉक्स G के ठीक ऊपर है?
//   //               </div>
//   //             </div>

//   //             <div className="space-y-2">
//   //               <label className="flex items-start gap-4 p-3 rounded-md cursor-pointer hover:bg-slate-50 transition border border-transparent">
//   //                 <input type="radio" name="option" className="mt-1.5 w-4 h-4 accent-[#158993] cursor-pointer" />
//   //                 <div className="text-slate-700">
//   //                   <div>Box C</div>
//   //                   <div className="mt-0.5">बॉक्स C</div>
//   //                 </div>
//   //               </label>

//   //               <label className="flex items-start gap-4 p-3 rounded-md cursor-pointer bg-slate-50 border border-slate-200">
//   //                 <input type="radio" name="option" className="mt-1.5 w-4 h-4 accent-[#158993] cursor-pointer" defaultChecked />
//   //                 <div className="text-slate-800 font-medium">
//   //                   <div>Box E</div>
//   //                   <div className="mt-0.5">बॉक्स E</div>
//   //                 </div>
//   //               </label>

//   //               <label className="flex items-start gap-4 p-3 rounded-md cursor-pointer hover:bg-slate-50 transition border border-transparent">
//   //                 <input type="radio" name="option" className="mt-1.5 w-4 h-4 accent-[#158993] cursor-pointer" />
//   //                 <div className="text-slate-700">
//   //                   <div>Box A</div>
//   //                   <div className="mt-0.5">बॉक्स A</div>
//   //                 </div>
//   //               </label>

//   //               <label className="flex items-start gap-4 p-3 rounded-md cursor-pointer hover:bg-slate-50 transition border border-transparent">
//   //                 <input type="radio" name="option" className="mt-1.5 w-4 h-4 accent-[#158993] cursor-pointer" />
//   //                 <div className="text-slate-700">
//   //                   <div>Box D</div>
//   //                   <div className="mt-0.5">बॉक्स D</div>
//   //                 </div>
//   //               </label>

//   //               <label className="flex items-start gap-4 p-3 rounded-md cursor-pointer hover:bg-slate-50 transition border border-transparent">
//   //                 <input type="radio" name="option" className="mt-1.5 w-4 h-4 accent-[#158993] cursor-pointer" />
//   //                 <div className="text-slate-700">
//   //                   <div>Box F</div>
//   //                   <div className="mt-0.5">बॉक्स F</div>
//   //                 </div>
//   //               </label>
//   //             </div>
//   //           </div>

//   //         </div>

//   //         {/* Question Footer */}
//   //         <div className="h-16 border-t border-slate-200 flex items-center justify-between px-6 bg-white">
//   //           <div className="flex gap-4">
//   //             <button className="px-5 py-2 border border-[#85b9e0] rounded bg-[#a2cded] text-slate-800 font-semibold hover:bg-[#85b9e0] transition shadow-sm">
//   //               Mark for Review & Next
//   //             </button>
//   //             <button className="px-5 py-2 border border-slate-300 rounded bg-white text-slate-700 font-semibold hover:bg-slate-50 transition shadow-sm">
//   //               Clear Response
//   //             </button>
//   //           </div>
//   //           <div>
//   //             <button className="px-10 py-2.5 rounded bg-[#158993] text-white font-bold hover:bg-[#11767f] transition shadow-md text-base tracking-wide">
//   //               Save & Next
//   //             </button>
//   //           </div>
//   //         </div>

//   //       </div>

//   //       {/* Right Sidebar */}
//   //       <div className="w-[320px] flex flex-col bg-[#e3f0f8] z-10 shadow-[-4px_0_15px_-3px_rgba(0,0,0,0.05)]">

//   //         {/* User Info */}
//   //         <div className="p-3 border-b border-white/40 flex items-center gap-3">
//   //           <div className="w-12 h-12 bg-[#12b4c6] rounded-full flex items-center justify-center text-white shadow-inner">
//   //             <User className="w-7 h-7" />
//   //           </div>
//   //           <div className="font-bold text-slate-800 text-base">Brajmohan</div>
//   //         </div>

//   //         {/* Status Legend */}
//   //         <div className="p-4 border-b border-white/40 grid grid-cols-2 gap-y-3 gap-x-2 text-[11px] font-semibold">
//   //           <div className="flex items-center gap-2">
//   //             <div className="w-7 h-6 bg-green-600 text-white flex items-center justify-center shadow-sm" style={{borderRadius: getStatusShape(1)}}>0</div>
//   //             <span className="text-slate-700">Answered</span>
//   //           </div>
//   //           <div className="flex items-center gap-2">
//   //             <div className="w-7 h-6 bg-purple-600 text-white flex items-center justify-center shadow-sm" style={{borderRadius: getStatusShape(3)}}>0</div>
//   //             <span className="text-slate-700">Marked</span>
//   //           </div>
//   //           <div className="flex items-center gap-2">
//   //             <div className="w-7 h-6 bg-white border border-slate-300 text-slate-700 flex items-center justify-center shadow-sm" style={{borderRadius: getStatusShape(0)}}>20</div>
//   //             <span className="text-slate-700">Not Visited</span>
//   //           </div>
//   //           <div className="flex items-center gap-2">
//   //             <div className="w-7 h-6 bg-purple-600 text-white flex items-center justify-center shadow-sm relative after:content-[''] after:w-2.5 after:h-2.5 after:bg-green-400 after:rounded-full after:absolute after:-bottom-1 after:-right-1 after:border-2 after:border-white" style={{borderRadius: getStatusShape(4)}}>0</div>
//   //             <span className="text-slate-700 leading-tight">Marked and answered</span>
//   //           </div>
//   //           <div className="flex items-center gap-2">
//   //             <div className="w-7 h-6 bg-red-500 text-white flex items-center justify-center shadow-sm" style={{borderRadius: getStatusShape(2)}}>0</div>
//   //             <span className="text-slate-700">Not Answered</span>
//   //           </div>
//   //         </div>

//   //         {/* Section Name */}
//   //         <div className="px-4 py-2 bg-[#b5d5e6] text-[#1b435c] font-extrabold text-xs uppercase tracking-wider shadow-sm">
//   //           SECTION : {activeSection}
//   //         </div>

//   //         {/* Question Number Grid */}
//   //         <div className="flex-1 p-4 overflow-y-auto bg-[#cbe3f1]">
//   //           <div className="grid grid-cols-5 gap-3">
//   //             {questionStatus.map((status, idx) => (
//   //               <button
//   //                 key={idx}
//   //                 className={`w-[42px] h-[38px] flex items-center justify-center font-bold text-[15px] border ${getStatusColor(status)} hover:opacity-90 transition cursor-pointer shadow-sm`}
//   //                 style={{
//   //                   borderRadius: getStatusShape(status)
//   //                 }}
//   //               >
//   //                 {idx + 1}
//   //               </button>
//   //             ))}
//   //           </div>
//   //         </div>

//   //         {/* Sidebar Submit Section */}
//   //         <div className="p-3 bg-[#b5d5e6]">
//   //           <button className="bg-[#158993] text-white py-1.5 px-4 rounded text-sm font-semibold hover:bg-[#11767f] transition shadow">
//   //             Submit Section
//   //           </button>
//   //         </div>

//   //         {/* Sidebar Footer Buttons */}
//   //         <div className="p-4 border-t border-white/50 bg-[#cbe3f1] flex flex-col gap-3">
//   //           <div className="flex gap-2">
//   //             <button className="flex-1 bg-[#a2cded] text-slate-800 py-2 rounded font-semibold hover:bg-[#8cbfe5] transition shadow-sm border border-[#8cbfe5]">
//   //               Question Paper
//   //             </button>
//   //             <button className="flex-1 bg-[#a2cded] text-slate-800 py-2 rounded font-semibold hover:bg-[#8cbfe5] transition shadow-sm border border-[#8cbfe5]">
//   //               Instructions
//   //             </button>
//   //           </div>
//   //           <button className="w-full bg-[#158993] text-white py-2.5 rounded font-extrabold hover:bg-[#11767f] transition shadow-md text-base tracking-wide">
//   //             Submit Test
//   //           </button>
//   //         </div>

//   //       </div>

//   //     </div>

//   //     {/* Global CSS for scrollbar to match the image closely */}
//   //     <style dangerouslySetInnerHTML={{__html: `
//   //       .custom-scrollbar::-webkit-scrollbar {
//   //         width: 8px;
//   //       }
//   //       .custom-scrollbar::-webkit-scrollbar-track {
//   //         background: #f8fafc;
//   //       }
//   //       .custom-scrollbar::-webkit-scrollbar-thumb {
//   //         background: #cbd5e1;
//   //         border-radius: 10px;
//   //       }
//   //       .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//   //         background: #94a3b8;
//   //       }
//   //     `}} />
//   //   </div>
//   // );
// };

const MockInterface = () => {
  return (
    <div>
      <h1>Mock Interface</h1>
    </div>
  );
};

export default MockInterface;
