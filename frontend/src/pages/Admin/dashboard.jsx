import adminDashboardSidebar from "../../components/adminDashboardSidebar";


import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='flex min-h-screen bg-slate-50'>
      <adminDashboardSidebar />
      <main className='flex-1'>
        <Outlet />
      </main>
    </div>
  )
}

export default Dashboard