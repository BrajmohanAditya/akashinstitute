import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingBag, X, Menu, Home, BarChart3 } from "lucide-react";

const AdminDashboardSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navItems = [
    { to: "/", label: "Home", icon: Home },
    { to: "/dashboard", label: "Analytics", icon: BarChart3 },
    {
      to: "/admindashboard/dashboardProduct",
      label: "Courses",
      icon: ShoppingBag,
    },
  ];

  return (
    <>
      {/* Mobile Hamburger Button */}
      {/* Mobile Top Bar */}
      <div className="lg:hidden flex items-center bg-white border-b border-slate-200 p-4 sticky top-0 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 text-slate-700 hover:bg-slate-100 rounded-md mr-3"
        >
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-black text-slate-900 tracking-tight">
          Akash academy
        </h1>
      </div>


      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}




      <div
        className={`w-64 bg-white shadow-xl border-r border-slate-200 h-screen fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-slate-200 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              Akash academy
            </h1>
            <p className="text-xs text-slate-500 font-medium mt-1">
              Admin Dashboard
            </p>
          </div>

          {/* 3. Add a Close button for mobile */}
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-md"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) =>
                `group flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer
              ${
                isActive
                  ? "bg-emerald-600 text-white shadow-lg hover:bg-emerald-700"
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 hover:shadow-md"
              }`
              }
            >
              <item.icon className="w-5 h-5 shrink-0" />
              <span className="truncate">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default AdminDashboardSidebar;
