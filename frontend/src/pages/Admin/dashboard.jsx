import AdminDashboardSidebar from "../../components/adminDashboardSidebar";


import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='flex flex-col lg:flex-row min-h-screen bg-slate-50'>

      <AdminDashboardSidebar />
      <main className='flex-1'>
        <Outlet />
      </main>
    </div>
  )
}

export default Dashboard