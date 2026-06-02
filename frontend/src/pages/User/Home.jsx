import React from "react";
import CourseSection from "@/components/userComponent/courseSection";
import HeroSection from "@/components/userComponent/heroSection";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

const Home = () => {
  return (
    <div className="min-h-[88vh] bg-slate-50">
      <HeroSection />
      <CourseSection />
       <FloatingWhatsApp />
    </div>
  );
};

export default Home;
