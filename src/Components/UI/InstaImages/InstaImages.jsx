import React, { useState } from "react";
import "./instaimages.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import photo1 from "../../../assets/bmw.jpg";
import photo2 from "../../../assets/girl-on-mclaren.jpg";
import photo3 from "../../../assets/lambo-in-office.webp";
import photo4 from "../../../assets/girls-ferrari.jpg";
import photo5 from "../../../assets/white-ferrari.jpg";
import photo6 from "../../../assets/boys-lambo.webp";
import photo7 from "../../../assets/green-ferrari.webp";
import photo8 from "../../../assets/green-lambo.webp";
import photo9 from "../../../assets/white-lambo.webp";
import photo10 from "../../../assets/red-ferrari.webp";

const InstaImages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="instaimages">
      <div className="container">
        <div className="instaimages__wrapper">
          <h2 className="contact__title">FOLLOW US ON INSTAGRAM</h2>
          <Swiper
            className="cp-slide"
            spaceBetween={9}
            slidesPerView={6}
            loop={true}
            pagination={{ clickable: false }}
            navigation={false}
          >
            {[
              photo1,
              photo2,
              photo3,
              photo4,
              photo5,
              photo6,
              photo7,
              photo8,
              photo9,
              photo10,
            ].map((photo, index) => (
              <SwiperSlide key={index}>
                <img
                  src={photo}
                  alt=""
                  className="instaimages__img"
                  onClick={() => openModal(photo)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            className="res-slide"
            spaceBetween={9}
            slidesPerView={1}
            loop={false}
            pagination={{ clickable: false }}
            navigation={false}
          >
            {[
              photo1,
              photo2,
              photo3,
              photo4,
              photo5,
              photo6,
              photo7,
              photo8,
              photo9,
              photo10,
            ].map((photo, index) => (
              <SwiperSlide key={index}>
                <img
                  src={photo}
                  alt=""
                  className="instaimages__img"
                  onClick={() => openModal(photo)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Modal oynasi */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <button className="modal__close" onClick={closeModal}>
            &times;
          </button>
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <img
              src={currentImage}
              alt=""
              className="modal__img"
              onClick={closeModal}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default InstaImages;
