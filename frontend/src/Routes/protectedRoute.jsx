import { GetUserHook } from "@/hooks/User.hook";
import { Loader2 } from "lucide-react";

import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({ children, requireAdmin = false }) => {
  const { data, isLoading, isError, error } = GetUserHook();

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-linear-to-br from-slate-50 to-slate-100">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-20 h-20 text-emerald-600 animate-spin" />
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">
            Loading ...
          </h1>
        </div>
      </div>
    );
  }

  if (isError || !data) {
    console.error("Auth error:", error);
    return <Navigate to="/login" replace />;
  }
  
  if (requireAdmin && data.user.role !== "admin") {
    console.warn("Access Denied: You are not an admin!");
    return <Navigate to="/" replace />; // Kick them back to the homepage
  }

  return children;
};
