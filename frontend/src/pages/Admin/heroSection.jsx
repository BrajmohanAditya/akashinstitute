import React, { useState } from "react";
import {
  Plus,
  Image as ImageIcon,
  Newspaper,
  FileText,
  AlignLeft,
  Hash,
  Link as LinkIcon,
  Upload,
  Save,
} from "lucide-react";

const HeroSectionManagement = () => {
  const [activeTab, setActiveTab] = useState("create");
  const [type, setType] = useState("banner");

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-slate-800">
            Banner & Upcoming Exam{" "}
          </h1>
          <p className="text-slate-500 mt-1">
            Create banners and upcoming exams
          </p>
        </div>

        {/* Tabs Container */}
        <div className="bg-white border border-slate-200 rounded-xl p-1.5 flex flex-wrap gap-2 mb-6 shadow-sm w-full max-w-fit">
          <button
            onClick={() => setActiveTab("create")}
            className={`flex items-center px-4 py-2 cursor-pointer rounded-lg text-sm font-medium transition-all ${
              activeTab === "create"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            <Plus className="w-4 h-4 mr-2" />
            Create Banner/Exam
          </button>

          <button
            onClick={() => setActiveTab("banners")}
            className={`flex items-center px-4 py-2 cursor-pointer rounded-lg text-sm font-medium transition-all ${
              activeTab === "banners"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            <ImageIcon className="w-4 h-4 mr-2" />
            Banners
          </button>

          <button
            onClick={() => setActiveTab("exams")}
            className={`flex items-center px-4 py-2 cursor-pointer rounded-lg text-sm font-medium transition-all ${
              activeTab === "exams"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            <Newspaper className="w-4 h-4 mr-2" />
            Exams
          </button>
        </div>

        {/* We will add the Form Content here in Step 3 */}
        {activeTab === "create" && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            {/* Form Header */}
            <div className="bg-violet-600 text-white p-6">
              <h2 className="text-xl font-semibold flex items-center">
                <Plus className="w-5 h-5 mr-2" />
                Create New Banner or Exam
              </h2>
              <p className="text-violet-200 text-sm mt-1.5">
                Fill in the details to create a new banner or upcoming exam
              </p>
            </div>

            {/* Form Body */}
            <div className="p-6 md:p-8 space-y-6">
              {/* 1. Type Selection */}
              <div>
                <label className="flex items-center text-sm font-semibold text-slate-700 mb-3">
                  <FileText className="w-4 h-4 mr-2 text-indigo-600" />
                  Type <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="flex space-x-6">
                  {/* Banner Radio */}
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="radio"
                      name="type"
                      value="banner"
                      checked={type === "banner"}
                      onChange={() => setType("banner")}
                      className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600 cursor-pointer"
                    />
                    <span className="ml-2 text-slate-700 text-sm group-hover:text-slate-900">
                      Banner
                    </span>
                  </label>

                  {/* Exam Radio */}
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="radio"
                      name="type"
                      value="exam"
                      checked={type === "exam"}
                      onChange={() => setType("exam")}
                      className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600 cursor-pointer"
                    />
                    <span className="ml-2 text-slate-700 text-sm group-hover:text-slate-900">
                      Upcoming Exam
                    </span>
                  </label>
                </div>
              </div>

              {/* We will add Title and Image inputs here in Step 5 */}
            </div>
          </div>
        )}

        {/* Placeholders for the other tabs */}
        {activeTab === "banners" && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center text-slate-500">
            Banner list content will go here
          </div>
        )}

        {activeTab === "exams" && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center text-slate-500">
            Upcoming Exam list content will go here
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSectionManagement;
