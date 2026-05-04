import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import Home from '../pages/User/Home'
const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default MainRoutes