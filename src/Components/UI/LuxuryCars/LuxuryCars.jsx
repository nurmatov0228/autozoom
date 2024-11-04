import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

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

  const sportCars = base.filter(
    (item) => item?.category?.name_en === "Luxury Cars Rental Emirates"
  );

  return (
    <div className="budget">
      <div className="budget__container">
        <div className="budget__header">
          <h1>Luxury Cars Rental Emirates</h1>
          <button className="budget__see-all">See All &gt;</button>
        </div>
        <Swiper
          className="budget__cards mySwiper"
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
        >
          {sportCars.map((item) => (
            <SwiperSlide>
              <Card key={item.id} item={item} location={"budget"} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BudgetCars;
