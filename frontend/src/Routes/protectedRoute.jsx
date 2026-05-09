import { GetUserHook } from "@/hooks/User.hook";
import { useUserStore } from "@/store/user.store";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";

import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({ children }) => {
  const setUser = useUserStore((state) => state.setUser);
  const { data, isLoading, isError, error } = GetUserHook();

  
  useEffect(() => {
    if (data) {
      setUser(data?.user);
    }
  }, [data, setUser]);

  
  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-linear-to-br from-slate-50 to-slate-100">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-12 h-12 text-emerald-600 animate-spin" />
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

  return children;
};
