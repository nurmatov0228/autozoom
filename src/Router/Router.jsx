import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../Pages/Loader";
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
    </div>
  );
}

export default Router;
