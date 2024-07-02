import React, { useState, useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import AppContext from "./app.context"
//import $ from "jquery"

// Layouts
import LoginLayout from "./layouts/login"
import Dashboardlayout from "./layouts/dashboard"

// Pages
import Login from "./pages/account/login"
import Register from "./pages/account/register"
import ForgotPassword from "./pages/account/forgot-password"
import ResetPassword from "./pages/account/reset-password"
import Home from "./pages/dashboard/home"
import Research from "./pages/dashboard/research"
import Recipes from "./pages/dashboard/recipes"


function App() {
  const [loginPanelHeight, setLoginPanelHeight] = useState(AppContext)


  useEffect(() => {
  }, [])

  const location = useLocation()

  return(
    <div className="App">
      <AppContext.Provider value={{ loginPanelHeight, setLoginPanelHeight }}>
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path="/">
              <Route element={<LoginLayout />}>
                <Route index element={<Login />} />
                <Route path="wachtwoord-vergeten" element={<ForgotPassword />} />
                <Route path="wachtwoord-herstellen" element={<ResetPassword />} />
                <Route path="registreren" element={<Register />} />
              </Route>
              <Route path="dashboard" element={<Dashboardlayout />} >
                <Route index element={<Home />} />
                <Route path="research" element={<Research />} />
                <Route path="recipes" element={<Recipes />} />
                <Route path="trades" element={<Home />} />
                <Route path="fitness" element={<Home />} />
              </Route>
            </Route>
          </Routes>
        </AnimatePresence>
      </AppContext.Provider>
    </div>
  )
}

export default App