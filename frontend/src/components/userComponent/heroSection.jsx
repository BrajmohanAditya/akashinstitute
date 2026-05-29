import React from "react";

const HeroSection = () => {
  return (
    // Main Container
    <div className="pt-8 pb-4 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Flex row banayenge jo badi screen par side-by-side hoga, aur mobile par upar-neeche */}
        <div className="flex flex-col lg:flex-row gap-6">
        
        {/* ========================================= */}
        {/* LEFT SIDE: Upcoming Exams (40% width)     */}
        {/* ========================================= */}
        <div className="w-full lg:w-[40%] bg-white rounded-2xl shadow-sm border border-slate-200 p-5">
          
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-slate-800">Upcoming Exams</h2>
            <button className="text-sm font-bold text-purple-700 hover:underline">
              View More
            </button>
          </div>

          {/* Exam Icons Grid (4 columns) */}
          <div className="grid grid-cols-4 gap-3">
            {/* Exam Item 1 */}
            <div className="flex flex-col items-center justify-center p-3 border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 mb-2 flex items-center justify-center">
                <img src="https://upload.wikimedia.org/wikipedia/en/3/39/Reserve_Bank_of_India_logo.svg" alt="RBI" className="w-full h-full object-contain" />
              </div>
              <span className="text-[10px] font-bold text-center text-slate-700 leading-tight">RBI Assistant</span>
            </div>

            {/* Exam Item 2 */}
            <div className="flex flex-col items-center justify-center p-3 border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 mb-2 flex items-center justify-center">
                <img src="https://upload.wikimedia.org/wikipedia/en/3/39/Reserve_Bank_of_India_logo.svg" alt="RBI" className="w-full h-full object-contain" />
              </div>
              <span className="text-[10px] font-bold text-center text-slate-700 leading-tight">RBI Attendant</span>
            </div>

            {/* Exam Item 3 */}
            <div className="flex flex-col items-center justify-center p-3 border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 mb-2 flex items-center justify-center">
                <img src="https://upload.wikimedia.org/wikipedia/en/5/58/State_Bank_of_India_logo.svg" alt="SBI" className="w-full h-full object-contain" />
              </div>
              <span className="text-[10px] font-bold text-center text-slate-700 leading-tight">SBI PO</span>
            </div>

            {/* Exam Item 4 */}
            <div className="flex flex-col items-center justify-center p-3 border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 mb-2 flex items-center justify-center">
                {/* IBPS logo aapko manually add karni padegi, abhi ke liye placeholder hai */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Globe_icon.svg/1024px-Globe_icon.svg.png" alt="IBPS" className="w-full h-full object-contain opacity-50" />
              </div>
              <span className="text-[10px] font-bold text-center text-slate-700 leading-tight">IBPS PO</span>
            </div>

          </div>
        </div>

        {/* ========================================= */}
        {/* RIGHT SIDE: Offer Banner (60% width)      */}
        {/* ========================================= */}
        <div className="w-full lg:w-[60%] bg-slate-900 rounded-2xl overflow-hidden relative min-h-[200px] flex items-center justify-center">
          
          {/* Yahan aap apna banner image lagayenge */}
          {/* <img src="banner.jpg" alt="Offer" className="w-full h-full object-cover" /> */}
          
          <h2 className="text-white text-2xl font-bold">Your Offer Banner Here</h2>

          {/* Carousel Dots (Neeche ki pink lines) */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1">
            <div className="w-8 h-1 bg-pink-500 rounded-full"></div>
            <div className="w-8 h-1 bg-pink-200 rounded-full"></div>
            <div className="w-8 h-1 bg-pink-200 rounded-full"></div>
          </div>

        </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
