import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Navbar = () => {
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

          <PopoverContent className='w-64 p-1 mt-2 border-slate-200 shadow-2xl rounded-2xl'>
            <h1>Dashboard</h1>
            <h2>Logout</h2>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Navbar;
