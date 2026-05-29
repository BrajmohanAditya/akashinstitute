import React from "react";
import CourseSection from "@/components/userComponent/courseSection";
import HeroSection from "@/components/userComponent/heroSection";

const Home = () => {
  return (
    <div className="min-h-[88vh] bg-slate-50">
      <HeroSection />
      <CourseSection />
    </div>
  );
};

export default Home;
