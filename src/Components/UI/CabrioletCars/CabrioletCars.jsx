import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation for i18n

const BudgetCars = () => {
  const API = `https://realauto.limsa.uz/api/cars`;
  const [base, setBase] = useState([]);
  const { t } = useTranslation(); // useTranslation hook for i18n

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
    (item) => item?.category?.name_en === "Cabriolet cars rental Emirates"
  );

  return (
    <div className="budget">
      <div className="container">
        <div className="budget__container">
          <div className="budget__header">
            <h1>{t("CABRIOLET_CARS_HEADER")}</h1> {/* Translated header */}
            <NavLink to={`/cars/${sportCars[0]?.id}`} className="btnRuB">
              <p>{t("SEE_ALL")}</p> {/* Translated button text */}
              <svg
                className="imgbtn"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="path"
                  d="M13 10L21 16.5L13 23L17.5714 16.5L13 10Z"
                />
                <circle className="circle" cx="16" cy="16" r="15.5" />
              </svg>
            </NavLink>
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
              <SwiperSlide key={item.id}>
                <Card item={item} location={"budget"} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BudgetCars;
