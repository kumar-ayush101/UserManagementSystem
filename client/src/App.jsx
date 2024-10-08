import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Components/Register.jsx";
import Home from "./Pages/Home.jsx";
import './App.css'; 

function App() {

  return (
    <div className="centered">
     <BrowserRouter>
     <Routes>
      <Route path = "/"  element = {<Home />} />
      <Route path = "/register" element={<Register />} />
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
