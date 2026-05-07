import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import Home from '../pages/User/Home'
import { ProtectedRoutes } from './protectedRoute'
const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element= {<ProtectedRoutes><Home /></ProtectedRoutes>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default MainRoutes

