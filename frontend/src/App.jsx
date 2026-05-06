import React from 'react'
import MainRoutes from './Routes/MainRoutes'
import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  const location = useLocation();
  const hiddenRoutes = ["/login","/register"];
  const shouldHideNavbar = hiddenRoutes.some((route)=>location.pathname === route);
  return (
    <>
    
    {!shouldHideNavbar && <Navbar />}
    <div><MainRoutes/></div>
    </>
  )
}

export default App
