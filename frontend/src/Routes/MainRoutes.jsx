import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Home from "../pages/User/Home";
import { ProtectedRoutes } from "./protectedRoute";
import DashboardProducts from "../pages/Admin/DashboardProducts";
import Dashboard from "../pages/Admin/dashboard";
import UserLayout from "../layout/userLayout";
import ModulePage from "../pages/Admin/module";
// UserLayout wraps routes that SHOULD have the top Navbar


const MainRoutes = () => {
  return (
    <Routes>
      {/* --- User Routes (Wrapped with Navbar) --- */}
      <Route element={<UserLayout />}>
        <Route
          path="/"
          element={
              <Home />
          }
        />
      </Route>

      {/* --- Admin Routes (No Main Navbar) --- */}
      <Route
        path="/admindashboard"
        element={
          <ProtectedRoutes requireAdmin={true} >
            <Dashboard />
          </ProtectedRoutes>
        }
      >
        <Route
          path="dashboardProduct"
          element={
            <ProtectedRoutes>
              <DashboardProducts />
            </ProtectedRoutes>
          }
        />
        <Route
          path="module/:id"
          element={
            <ProtectedRoutes>
              <ModulePage />
            </ProtectedRoutes>
          }
        />
      </Route>

      {/* --- Auth Routes (No Navbar) --- */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

    </Routes>
  );
};

export default MainRoutes;
