import React from "react";
import { useGetCourseHook } from "../hooks/course.hook.js";
import { useNavigate } from "react-router-dom";
import { BookOpen, Clock, Users, Star } from "lucide-react";

const courseSection = () => {
  const { data, error, isLoading } = useGetCourseHook();
  const navigate = useNavigate();
  if (isLoading) {
    return (
      <div className="py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-slate-200 h-64 rounded-2xl p-6">
                <div className="bg-slate-300 h-48 rounded-xl mb-4"></div>
                <div className="h-6 bg-slate-300 rounded-full mb-3"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-slate-300 rounded w-3/4"></div>
                  <div className="h-4 bg-slate-300 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {data?.courses?.map((item) => (
            <div
              key={item._id}
              className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl 
                        hover:-translate-y-2 hover:border-slate-300 cursor-pointer transition-all 
                        duration-300 overflow-hidden max-w-sm mx-auto"
            >
              {/* Thumbnail */}
              <div className="relative mb-6">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                  <Star className="w-4 h-4 text-yellow-500 fill-current inline mr-1" />
                  <span className="text-sm font-bold text-slate-800">
                    {item.rating || "4.8"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default courseSection;
