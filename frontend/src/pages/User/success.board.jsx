import React from "react";
import { useGetSuccessBoardHook } from "../../hooks/success.board.hook.js";
import { Quote } from "lucide-react";
import SmoothCarousel from "@/components/ui/SmoothCarousel";

const SuccessBoardDisplay = () => {
  const { data: boardData, isLoading } = useGetSuccessBoardHook();
  const students = boardData?.students || [];

  // Separate students with and without stories
  const storyStudents = students.filter((s) => s.story && s.story.trim() !== "");
  const achievers = students.filter((s) => !s.story || s.story.trim() === "");

  const displayStudents = storyStudents.length > 0 ? Array(8).fill(storyStudents).flat() : [];

  if (isLoading) {
    return (
      <div className="py-12 flex justify-center">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (students.length === 0) return null;

  return (
    <div className="py-16 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Success Stories Section */}
        {storyStudents.length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 flex items-center justify-center gap-3">
                <span className="text-purple-400">✦</span>
                Success Stories, Real Impact
                <span className="text-purple-400">✦</span>
              </h2>
              <p className="mt-4 text-slate-600 max-w-3xl mx-auto text-sm leading-relaxed">
                Thousands of Students have fulfilled their dream of getting a Banking or Government Job by preparing with us. You can read the views of some of our successful students to know how we helped them with their Exam preparation.
              </p>
            </div>

            <SmoothCarousel itemsPerSet={storyStudents.length} autoSlideInterval={4000}>
                {displayStudents.map((student, index) => {
                  const themes = [
                    { shadow: "shadow-[8px_8px_0_0_#fde047]", badge: "bg-yellow-500", blob: "bg-yellow-200/50" },
                    { shadow: "shadow-[8px_8px_0_0_#60a5fa]", badge: "bg-blue-500", blob: "bg-blue-200/50" },
                    { shadow: "shadow-[8px_8px_0_0_#c084fc]", badge: "bg-purple-500", blob: "bg-purple-200/50" },
                    { shadow: "shadow-[8px_8px_0_0_#f472b6]", badge: "bg-pink-400", blob: "bg-pink-200/50" },
                  ];
                  const theme = themes[index % themes.length];

                  return (
                  <div 
                    key={`${student._id}-${index}`} 
                    className={`min-w-[340px] max-w-[360px] bg-white rounded-2xl border border-slate-100 p-7 flex-shrink-0 relative overflow-hidden transition-transform duration-500 ease-out select-none ${theme.shadow} hover:-translate-y-2 hover:-translate-x-2`}
                  >
                    {/* Decorative Background Blobs */}
                    <div className={`absolute bottom-0 left-0 w-full h-24 ${theme.blob} -z-10`} style={{ clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0 100%)' }}></div>

                    {/* Content */}
                    <div className="flex gap-5 items-start">
                       {/* Profile Image & Quote Icon */}
                       <div className="relative shrink-0 pointer-events-none">
                          <img 
                            src={student.imageUrl || "https://ui-avatars.com/api/?name=" + student.name} 
                            alt={student.name}
                            className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-sm z-10 relative bg-slate-100"
                          />
                          <div className={`absolute -right-1 top-2 ${theme.badge} text-white p-1.5 rounded-full z-20 shadow-sm border-2 border-white`}>
                            <Quote className="w-3.5 h-3.5 fill-current" />
                          </div>
                       </div>
                       
                       {/* Story Text */}
                       <p className="text-slate-600 text-[13px] leading-relaxed line-clamp-5 relative z-10 pt-1 pointer-events-none">
                         {student.story}
                       </p>
                    </div>

                    <div className="mt-6 pt-4 pointer-events-none">
                      <h4 className="font-bold text-purple-800 text-[13px] tracking-tight">{student.name}</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5 font-medium">{student.exam} {student.year}</p>
                    </div>
                  </div>
                  );
                })}
            </SmoothCarousel>
          </div>
        )}

        {/* Achievers Section */}
        {achievers.length > 0 && (
          <div className="mt-16 pt-8 border-t border-slate-100">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-purple-900">Achievers</h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
              {achievers.map((achiever, index) => {
                // Color array for the top borders (similar to the image design)
                const colors = ['border-purple-300', 'border-pink-300', 'border-yellow-300', 'border-green-300', 'border-blue-300'];
                const topBorderColor = colors[index % colors.length];

                return (
                  <div 
                    key={achiever._id} 
                    className={`bg-white rounded-xl shadow-[0_4px_15px_-3px_rgba(0,0,0,0.05)] p-5 flex flex-col items-center text-center border-t-4 ${topBorderColor} hover:-translate-y-1.5 transition-transform duration-300 relative overflow-hidden`}
                  >
                    {/* Confetti-like background decor */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-slate-50 rounded-full -z-10"></div>
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-slate-50 rounded-full -z-10"></div>

                    <img 
                      src={achiever.imageUrl || "https://ui-avatars.com/api/?name=" + achiever.name} 
                      alt={achiever.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm mb-3 z-10 bg-slate-100"
                    />
                    <h4 className="font-bold text-slate-800 text-sm mb-1.5 leading-tight z-10">{achiever.name}</h4>
                    <p className={`text-[10px] font-bold ${topBorderColor.replace('border-', 'text-').replace('-300', '-600')} leading-tight z-10`}>
                      {achiever.exam} {achiever.year}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
      
      {/* Global Style for hiding scrollbar in Webkit (Chrome/Safari) */}
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
};

export default SuccessBoardDisplay;
