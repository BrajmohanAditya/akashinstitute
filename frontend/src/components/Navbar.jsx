import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { LayoutDashboard, User, BookOpen, LogOut } from "lucide-react";
import { Loader2 } from "lucide-react";
import { userLogoutHook } from "../hooks/User.hook";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = userLogoutHook();

  const logoutHandler = () => {
    mutate();
  };

  const navItems = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      onClick: () => navigate("/dashboard"),
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
    <div className="h-[12vh] w-full flex items-center justify-between px-9 shadow">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent tracking-tight">
          Akash Acedmy
        </h1>
      </div>
      <div>
        <Popover>
          <PopoverTrigger className="flex items-center gap-3 p-2 hover:bg-slate-100 rounded-xl transition-all duration-200 group cursor-pointer">
            <Avatar className="w-10 h-10 ring-2 ring-slate-200 group-hover:ring-slate-300 transition-all">
              <AvatarImage
                src={"https://github.com/shadcn.png"}
                className="object-cover"
              />
              <AvatarFallback className="bg-gradient-to-br from-slate-200 to-slate-300 text-slate-700 font-semibold text-sm"></AvatarFallback>
            </Avatar>
          </PopoverTrigger>

          <PopoverContent className="w-64 p-1 mt-2 border-slate-200 shadow-2xl rounded-2xl">
            <div className="py-2 space-y-1">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={item.onClick}
                  disabled={item.loading}
                  className="group relative w-full flex items-center gap-3 px-4 py-3 text-left rounded-xl transition-all duration-200 hover:bg-slate-50 hover:shadow-md text-sm font-medium text-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <item.icon className="w-4 h-4 text-slate-500 group-hover:text-slate-700 flex-shrink-0" />
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
