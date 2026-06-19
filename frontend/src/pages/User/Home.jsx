import React from "react";
import CourseSection from "@/components/userComponent/courseSection";
import HeroSection from "@/components/userComponent/heroSection";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import StudyMaterial from "./study.material";
import SuccessBoardDisplay from "./success.board";
import Footer from "@/components/userComponent/homePage.footer";

const Home = () => {
  return (
    <div className="min-h-[88vh] bg-slate-50">
      <HeroSection />
      <StudyMaterial />
      <CourseSection />
      <SuccessBoardDisplay />
      <Footer />

      <FloatingWhatsApp />
    </div>
  );
};

export default Home;
