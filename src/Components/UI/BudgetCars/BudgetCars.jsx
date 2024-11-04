import React, { useEffect, useState } from "react";
import "./budgetcars.scss";
import axios from "axios";
import Card from "../Card/Card";

const BudgetCars = () => {
  const API = `https://realauto.limsa.uz/api/cars`;
  const [base, setBase] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(API);
      setBase(response?.data?.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const budgetCars = base.filter(
    (item) => item?.category?.name_en === "Budget cars Rental Emirates"
  );

  return (
    <div className="budget">
      <div className="budget__container">
        <div className="budget__header">
          <h1>Budget Cars Rental Emirates</h1>
          <button className="budget__see-all">See All &gt;</button>
        </div>
        <div className="budget__cards">
          {budgetCars.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BudgetCars;
