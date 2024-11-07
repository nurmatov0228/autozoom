import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Router from "../../Router/Router";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Loader from "../../Pages/Loader";
import axios from "axios";

const Layout = () => {
  // const API = `https://realauto.limsa.uz/api/cars`;
  // const [base, setBase] = useState([]); // Barcha mashinalarni saqlaydi
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(API);
  //     setBase(response?.data?.data || []);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const body = () => {
  //   if (base.length > 0) {
  //     return <></>;
  //   } else {
  //     return (
  //       <div className="loaderbody">
  //         <Loader />
  //       </div>
  //     );
  //   }
  // };
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
