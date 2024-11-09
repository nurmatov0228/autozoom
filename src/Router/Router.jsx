import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import CarsPage from "../Pages/Cars";
import CarItem from "../Pages/CarsItem";
function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cars" element={<CarsPage />} />
        <Route path="/cars/:id" element={<CarsPage />} />
        <Route path="/caritem/:id" element={<CarItem />} />
      </Routes>
    </div>
  );
}

export default Router;
