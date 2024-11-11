import React from "react";
import { ToastContainer } from "react-toastify";
import Router from "../../Router/Router";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
const Layout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <ToastContainer className="toastify" />
      <div className="router">
        <Router />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
