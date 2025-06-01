// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route >
            <Route path="/" element={<Home />} />
          </Route>
        </Routes> 
      </Router>
    </>
  )
}

export default App
