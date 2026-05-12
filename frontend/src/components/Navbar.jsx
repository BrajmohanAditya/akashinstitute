import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Shield, User, BookOpen, LogOut } from "lucide-react";
import { Loader2 } from "lucide-react";
import { userLogoutHook } from "../hooks/User.hook";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/user.store";
import StudentIcon from "./icons/StudentIcon";

import SearchBar from "./searchBar"; // Assuming SearchBar is in the same folder

const Navbar = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = userLogoutHook();
  const { user } = useUserStore();

  const logoutHandler = () => {
    mutate();
  };

  const navItems = [
    {
      label: "Admin Dashboard",
      icon: Shield,
      onClick: () => navigate("/admindashboard"),
    },
    {
      label: "Profile",
      icon: User,
      onClick: () => navigate("/profile"),
    },
    {
      label: "Your Courses",
      icon: BookOpen,
      onClick: () => navigate("/YourCourse"),
    },
    {
      label: "Logout",
      icon: LogOut,
      onClick: logoutHandler,
      loading: isPending,
    },
  ];

  return (
    <div className="sticky top-0 z-50 bg-white min-h-[12vh] w-full flex flex-wrap items-center justify-between px-4 md:px-9 py-3 md:py-0 shadow gap-y-4">
      <div className="flex items-center gap-3 order-1">
        <h1 className="text-2xl lg:text-3xl font-black bg-linear-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent tracking-tight">
          Goal The aim
        </h1>
      </div>

      {/* Search Bar in Navbar */}
      <div className="w-full md:w-auto md:flex-1 flex justify-center order-3 md:order-2">
        <SearchBar />
      </div>

      <div className="order-2 md:order-3">
        <Popover>
          <PopoverTrigger className="flex items-center gap-3 p-2 hover:bg-slate-100 rounded-xl transition-all duration-200 group cursor-pointer">
            <Avatar className="w-10 h-10 ring-2 ring-slate-200 group-hover:ring-slate-300 transition-all">
              <AvatarImage
                src={user?.profilePhoto || ""}
                className="object-cover"
              />
              <AvatarFallback className="bg-blue-50 w-full h-full">
                <StudentIcon />
              </AvatarFallback>
            </Avatar>

            <div className="hidden md:block text-left">
              <p className="font-semibold text-sm text-slate-900 leading-tight">
                {user?.name ? user.name.slice(0, 2).toUpperCase() : " "}
              </p>
            </div>

            <svg
              className="w-4 h-4 text-slate-400 ml-1 group-hover:text-slate-600 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </PopoverTrigger>

          <PopoverContent className="w-64 p-1 mt-2 border-slate-200 shadow-2xl rounded-2xl">
            <div className="p-4 border-b border-slate-100">
              <p className="font-semibold text-slate-900 text-sm tracking-tight">
                {user?.name || "Welcome back"}
              </p>
              <p className="text-xs text-slate-500 font-medium">
                Manage your account
              </p>
            </div>

            <div className="py-2 space-y-1">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={item.onClick}
                  disabled={item.loading}
                  className="group relative w-full flex items-center gap-3 px-4 py-3 text-left rounded-xl transition-all duration-200 hover:bg-slate-50 hover:shadow-md text-sm font-medium text-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <item.icon className="w-4 h-4 text-slate-500 group-hover:text-slate-700 shrink-0" />
                  <span className="truncate">{item.label}</span>

                  {item.loading && (
                    <div className="absolute right-4">
                      <Loader2 className="w-4 h-4 animate-spin text-slate-500" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Navbar;
