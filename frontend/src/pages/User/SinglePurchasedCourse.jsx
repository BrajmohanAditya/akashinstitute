import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { PlayCircle } from "lucide-react";
import { useGetSinglePurchasedCourseHook } from "@/hooks/course.hook";

const SinglePurchasedCourse = () => {
  const { id } = useParams();
  const { data } = useGetSinglePurchasedCourseHook(id);
  const [module, setModule] = useState(null);

  const videoHandler = (item) => {
    setModule(item);
  };
  return (
    <div className="flex h-screen bg-slate-50">
      {/* Left - Video Player */}
      <div className="w-full lg:w-2/3 flex flex-col border-r border-slate-200 bg-slate-900">
        <div className="flex-1 flex items-center justify-center relative">
          {module?.video ? (
            <video
              className="h-full w-full object-contain"
              src={module.video}
              controls
              autoPlay
            />
          ) : (
            <div className="text-center text-slate-400">
              <PlayCircle className="w-20 h-20 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-semibold">Select a module to watch</p>
            </div>
          )}
        </div>
      </div>

      {/* Right - Modules List */}
      <div className="w-full lg:w-1/3 bg-white overflow-y-auto">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Course Content
          </h2>

          <div className="space-y-3">
            {data?.modules?.map((item, index) => (
              <button
                key={item._id || index}
                onClick={() => videoHandler(item)}
                className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl border transition-all text-left
                  ${
                    module?._id === item._id
                      ? "border-emerald-500 bg-emerald-50"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                  }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 transition-colors
                  ${module?._id === item._id ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-700"}`}
                >
                  {index + 1}
                </div>
                <div className="flex flex-col">
                  <span
                    className={`font-semibold line-clamp-2 ${module?._id === item._id ? "text-emerald-800" : "text-slate-900"}`}
                  >
                    {item.title}
                  </span>
                  {module?._id === item._id && (
                    <span className="text-xs text-emerald-600 font-medium mt-1">
                      Now Playing
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePurchasedCourse;
