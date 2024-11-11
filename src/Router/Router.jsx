import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD
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
import Services from "../Components/UI/Services/Services";
=======
import { lazy } from "react";
import Loader from "../Pages/Loader";

>>>>>>> 75b6ca4a2e40395ca0b402de9eed40ebf7221fd5
function Router() {
  const Home = lazy(() => import("../Pages/Home"));
  const About = lazy(() => import("../Pages/About"));
  const Contact = lazy(() => import("../Pages/Contact"));
  const CarsPage = lazy(() => import("../Pages/Cars"));
  const Brend = lazy(() => import("../Pages/Brend"));
  const Blog = lazy(() => import("../Pages/Blog"));
  const BlogView2 = lazy(() => import("../Pages/BlogView2"));
  const BlogView3 = lazy(() => import("../Pages/BlogView3"));
  const BlogVew1 = lazy(() => import("../Pages/BlogView1"));
  const CarItem = lazy(() => import("../Pages/CarsItem"));

  return (
    <div>
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogview1" element={<BlogVew1 />} />
        <Route path="/blogview2" element={<BlogView2 />} />
        <Route path="/blogview3" element={<BlogView3 />} />
        <Route path="/brand" element={<Brend />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cars" element={<CarsPage />} />
        <Route path="/cars/:id" element={<CarsPage />} />
        <Route path="/caritem/:id" element={<CarItem />} />
        <Route path="/services" element={<Services />} />
      </Routes>
=======
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogview1" element={<BlogVew1 />} />
          <Route path="/blogview2" element={<BlogView2 />} />
          <Route path="/blogview3" element={<BlogView3 />} />
          <Route path="/brand" element={<Brend />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cars" element={<CarsPage />} />
          <Route path="/cars/:id" element={<CarsPage />} />
          <Route path="/caritem/:id" element={<CarItem />} />
        </Routes>
      </Suspense>
>>>>>>> 75b6ca4a2e40395ca0b402de9eed40ebf7221fd5
    </div>
  );
}

export default Router;
