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
import { TabButton, RadioButton } from "@/components/ui/HeroButton";

const HeroSectionManagement = () => {
  const [activeTab, setActiveTab] = useState("create");
  const [type, setType] = useState("banner");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [logo, setLogo] = useState(null);

  return (
    <div className="h-screen overflow-y-auto bg-slate-50 p-6 md:p-8 font-sans pb-24">
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
          <TabButton
            active={activeTab === "create"}
            onClick={() => setActiveTab("create")}
            icon={Plus}
            label="Create Banner/Exam"
          />
          <TabButton
            active={activeTab === "banners"}
            onClick={() => setActiveTab("banners")}
            icon={ImageIcon}
            label="Banners"
          />
          <TabButton
            active={activeTab === "exams"}
            onClick={() => setActiveTab("exams")}
            icon={Newspaper}
            label="Exams"
          />
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
                  <RadioButton
                    name="type"
                    value="banner"
                    checked={type === "banner"}
                    onChange={() => setType("banner")}
                    label="Banner"
                  />
                  <RadioButton
                    name="type"
                    value="exam"
                    checked={type === "exam"}
                    onChange={() => setType("exam")}
                    label="Upcoming Exam"
                  />
                </div>
                
              </div>

              {/* 2. Title Input */}
              <div>
                <label className="flex items-center text-sm font-semibold text-slate-700 mb-2">
                  <AlignLeft className="w-4 h-4 mr-2 text-indigo-600" />
                  Title <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter title here..."
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all"
                />
              </div>

              {/* 3. Main Image Upload */}
              {type === "banner" && (
                <div>
                  <label className="flex items-center text-sm font-semibold text-slate-700 mb-2">
                    <ImageIcon className="w-4 h-4 mr-2 text-indigo-600" />
                    Main Image <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-300 border-dashed rounded-lg cursor-pointer bg-slate-50 hover:bg-slate-100">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-2 text-slate-400" />
                        <p className="text-sm text-slate-500">
                          <span className="font-semibold">Click to upload</span>{" "}
                          main image
                        </p>
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                    </label>
                  </div>
                  {/* Optional: Show selected file name */}
                  {image && (
                    <p className="text-sm text-green-600 mt-2">
                      Selected: {image.name}
                    </p>
                  )}
                </div>
              )}

              {/* 4. Conditional Logo Upload (Only for Exams) */}
              {type === "exam" && (
                <div>
                  <label className="flex items-center text-sm font-semibold text-slate-700 mb-2">
                    <ImageIcon className="w-4 h-4 mr-2 text-indigo-600" />
                    Exam Logo <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-300 border-dashed rounded-lg cursor-pointer bg-slate-50 hover:bg-slate-100">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-2 text-slate-400" />
                        <p className="text-sm text-slate-500">
                          <span className="font-semibold">Click to upload</span>{" "}
                          logo
                        </p>
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => setLogo(e.target.files[0])}
                      />
                    </label>
                  </div>
                  {/* Optional: Show selected file name */}
                  {logo && (
                    <p className="text-sm text-green-600 mt-2">
                      Selected: {logo.name}
                    </p>
                  )}
                </div>
              )}

              {/* 5. Save Button */}
              <div className="pt-4 border-t border-slate-200">
                <button className="w-full flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-all shadow-sm">
                  <Save className="w-5 h-5 mr-2" />
                  Save {type === "banner" ? "Banner" : "Exam"}
                </button>
              </div>
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
