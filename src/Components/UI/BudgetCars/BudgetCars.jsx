// import React, { useEffect, useState } from "react";
// import "./budgetcars.scss";
// import axios from "axios";
// import Card from "../Card/Card";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { NavLink } from "react-router-dom";

// const BudgetCars = () => {
//   const API = `https://realauto.limsa.uz/api/cars`;
//   const [base, setBase] = useState([]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(API);
//       setBase(response?.data?.data || []);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const budgetCars = base.filter(
//     (item) => item?.category?.name_en === "Budget cars Rental Emirates"
//   );

//   return (
//     <div className="budget">
//       <div className="container">
//         <div className="budget__container">
//           <div className="budget__header">
//             <h1>Budget Cars Rental Emirates</h1>
//             <NavLink to="/cars" className="btnRuB">
//               <p>SEE ALL</p>
//               <svg
//                 className="imgbtn"
//                 width="32"
//                 height="32"
//                 viewBox="0 0 32 32"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   className="path"
//                   d="M13 10L21 16.5L13 23L17.5714 16.5L13 10Z"
//                 />
//                 <circle className="circle" cx="16" cy="16" r="15.5" />
//               </svg>
//             </NavLink>
//           </div>
//           <Swiper
//             className="budget__cards mySwiper"
//             slidesPerView={3}
//             spaceBetween={30}
//             pagination={{
//               clickable: true,
//             }}
//             breakpoints={{
//               320: {
//                 slidesPerView: 1,
//                 spaceBetween: 10,
//               },
//               480: {
//                 slidesPerView: 2,
//                 spaceBetween: 20,
//               },
//               768: {
//                 slidesPerView: 3,
//                 spaceBetween: 30,
//               },
//               320: { slidesPerView: 1, spaceBetween: 10 },
//               640: { slidesPerView: 2, spaceBetween: 20 },
//               1024: { slidesPerView: 3, spaceBetween: 30 },
//             }}
//           >
//             {budgetCars.map((item) => (
//               <SwiperSlide key={item.id}>
//                 <Card item={item} location={"budget"} />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BudgetCars;

import React, { useEffect, useState } from "react";
import "./budgetcars.scss";
import axios from "axios";
import Card from "../Card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { NavLink } from "react-router-dom";

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
      <div className="container">
        <div className="budget__container">
          <div className="budget__header">
            <h1>Budget Cars Rental Emirates</h1>
            <NavLink to="/cars" className="btnRuB">
              <p>SEE ALL</p>
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
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 60,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
          >
            {budgetCars.map((item) => (
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
