// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/login.jsx"; // import your login page
import Register from "./pages/Login/resister.jsx"; // Assuming you want to use the same component for registration
import Cars from './pages/car/Car.jsx'; // import your car page
import Property from './pages/car/Property.jsx';
import Rent from './pages/car/Rent.jsx';
import RentedCar from './components/layouts/Requestedrent.jsx'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route >
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} /> {/* Add this line */}
            <Route path="/register" element={<Register />} /> {/* Assuming you want to use the same component for registration */}
            <Route path="/cars" element={<Cars />} /> {/* Add this line for the car page */}
            <Route path="/car/:id" element={<Property />} />
            <Route path="/car/:id/booking" element={<Rent />} />
            <Route path="/requestedCar" element={<RentedCar />} />
          </Route>
        </Routes> 
      </Router>
    </>
  )
}

export default App
