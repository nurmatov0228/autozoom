import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import CarsPage from "../Pages/Cars";
import Brend from "../Pages/Brend";
import Blog from "../Pages/Blog";
import BlogView2 from "../Pages/BlogView2";
import BlogView3 from "../Pages/BlogView3";
import BlogVew1 from "../Pages/BlogView1";
import CarItem from "../Pages/CarsItem";
function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogview1" element={<BlogVew1 />} />
        <Route path="/blogview2" element={<BlogView2/>} />
        <Route path="/blogview3" element={<BlogView3 />} />
        <Route path="/brand" element={<Brend/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/cars" element={<CarsPage />} />
        <Route path="/caritem/:id" element={<CarItem />} />
      </Routes>
    </div>
  );
}

export default Router;
