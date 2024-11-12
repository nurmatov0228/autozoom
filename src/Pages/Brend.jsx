import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/brand.scss";
import { Pagination, Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";

const Brend = () => {
  const { t } = useTranslation();
  const brands = [
    {
      imgSrc:
        "https://realauto.limsa.uz/api/uploads/images/18515cef-39ef-4e5e-9a77-3df3b12ddd42.png",
      name: "Toyota",
    },
    {
      imgSrc:
        "https://realauto.limsa.uz/api/uploads/images/0d22afa6-b549-423e-9a14-014c6c6b2eea.png",
      name: "Tesla",
    },
    {
      imgSrc:
        "https://realauto.limsa.uz/api/uploads/images/d585d075-18ce-414b-8644-49d371d08afc.png",
      name: "Rolls-Royce",
    },
    {
      imgSrc:
        "https://realauto.limsa.uz/api/uploads/images/ac1ecd80-fb27-4d64-b97a-d078e3fe2b34.png",
      name: "Ferrari",
    },
    {
      imgSrc:
        "https://realauto.limsa.uz/api/uploads/images/bd538eac-b552-475f-9311-c8c5e5828064.png",
      name: "Mustang",
    },
    {
      imgSrc:
        "https://realauto.limsa.uz/api/uploads/images/ac6d8dcf-54a5-4087-a867-e95e35585fce.png",
      name: "Bugatti",
    },
    {
      imgSrc:
        "https://realauto.limsa.uz/api/uploads/images/b847eb62-cb01-479e-9946-511c8cbccb1a.png",
      name: "Mercedes-Benz",
    },
    {
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/7/70/Hummer_logo.png",
      name: "Hummer",
    },
    {
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Cadillac_Logo.svg/1280px-Cadillac_Logo.svg.png",
      name: "Cadillac",
    },
    {
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/4/4b/Lamborghini_Logo.svg",
      name: "Lamborghini",
    },
    {
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Koenigsegg_logo.svg/1200px-Koenigsegg_logo.svg.png",
      name: "Koenigsegg",
    },
    {
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Porsche_logo.svg/1280px-Porsche_logo.svg.png",
      name: "Porsche",
    },
  ];

  return (
    <div className="brend">
      <div className="container">
        <div className="brend_container">
          <h2 className="brend_title">{t("brend")}</h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              1024: { slidesPerView: 4 },
              768: { slidesPerView: 3 },
              600: { slidesPerView: 2 },
              480: { slidesPerView: 1 },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {brands.map((brand, index) => (
              <SwiperSlide key={index}>
                <div className="brand-card">
                  <img
                    src={brand.imgSrc}
                    alt={brand.name}
                    style={{ width: '100px', height: '100px', objectFit: 'contain' }}
                  />
                  <p>{brand.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Brend;
