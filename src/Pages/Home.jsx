import React from "react";
import "../styles/home.scss";
import BudgetCars from "../Components/UI/BudgetCars/BudgetCars";
import SportCars from "../Components/UI/SportCars/SportCars";
import HyperCars from "../Components/UI/HyperCars/HyperCars";
import LuxuryCars from "../Components/UI/LuxuryCars/LuxuryCars";
import SuvCars from "../Components/UI/SuvCars/SuvCars";
import CabrioletCars from "../Components/UI/CabrioletCars/CabrioletCars";

const Home = () => {
  return (
    <div className="home">
      <BudgetCars />
      <SportCars />
      <HyperCars />
      <LuxuryCars />
      <SuvCars />
      <CabrioletCars />
    </div>
  );
};

export default Home;
