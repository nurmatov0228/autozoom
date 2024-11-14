import React from "react";
import "../styles/home.scss";
import BudgetCars from "../Components/UI/BudgetCars/BudgetCars";
import SportCars from "../Components/UI/SportCars/SportCars";
import HyperCars from "../Components/UI/HyperCars/HyperCars";
import LuxuryCars from "../Components/UI/LuxuryCars/LuxuryCars";
import SuvCars from "../Components/UI/SuvCars/SuvCars";
import CabrioletCars from "../Components/UI/CabrioletCars/CabrioletCars";
import Services from "../Components/UI/Services/Services";
import Rental from "../Components/UI/Rental/Rental";
import Faq from "../Components/UI/Faq/Faq";
import InstaImages from "../Components/UI/InstaImages/InstaImages";
import Location from "../Components/UI/Location/Location";

const Home = () => {
  return (
    <div className="home">
      <BudgetCars />
      <SportCars />
      <HyperCars />
      <LuxuryCars />
      <SuvCars />
      <CabrioletCars />
      <Services />
      <Rental />
      <Faq />
      <InstaImages />
      <Location />
    </div>
  );
};

export default Home;
