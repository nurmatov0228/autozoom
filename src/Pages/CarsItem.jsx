import React, { useEffect, useState } from "react";
import "../styles/caritem.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { FaGasPump, FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { CiCalendarDate } from "react-icons/ci";
import { IoIosSpeedometer } from "react-icons/io";
import { CiTimer } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoCarSportOutline, IoColorPaletteOutline } from "react-icons/io5";
import { Bounce, toast } from "react-toastify";

const CarsItem = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [base, setBase] = useState([]); // Barcha mashinalarni saqlaydi
  const [images, setImages] = useState([]); // Boshlang'ich qiymat sifatida bo'sh massiv
  const API = `https://realauto.limsa.uz/api/cars`;
  const params = useParams()?.id;

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

  const item = base.find((elem) => elem?.id === params);
  useEffect(() => {
    if (item) {
      setImages(
        item?.car_images.map(
          (image) =>
            `https://realauto.limsa.uz/api/uploads/images/${image?.image?.src}`
        ) || []
      );
    }
  }, [base, params]); // `base` yoki `params` o'zgarganda
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.trim().length && details.trim().length && name.trim().length) {
      const token = `7224174930:AAHfX4xYMCiylsXEZPRrKF395SLBmv3XdcU`;
      const chat_id = 1308395281;
      const url = `https://api.telegram.org/bot${token}/sendMessage`;

      axios({
        url: url,
        method: "post",
        data: {
          chat_id: chat_id,
          text:
            item?.model?.name +
            " uchun xabar: Ism: " +
            name +
            ", Raqam: " +
            phone +
            ", Ma'lumot: " +
            details,
        },
      })
        .then((data) => {
          toast.success("Ma'lumotlar jo'natildi", {
            position: "top-right",
            autoClose: 1700,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        })
        .catch((error) => {
          toast.error("Jo'natishda xatolik bor", {
            position: "top-right",
            autoClose: 1700,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        });
      setName("");
      setPhone("");
      setDetails("");
    } else {
      toast.warning("Kiritilgan ma'lumot noto'g'ri");
    }
  };

  return (
    <div className="caritem">
      <div className="container">
        <div className="caritem__container">
          <h2 className="caritem__title">
            {item?.model?.name} ({item?.color})
          </h2>
          <div className="caritem__top">
            <div className="caritem__left">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 "
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index} className="swiper-slide">
                    <img src={image} alt={`Car ${index + 1}`} />
                  </SwiperSlide>
                ))}
              </Swiper>{" "}
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper thumbnail-slider"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index} className="thumbnail-slide">
                    <img src={image} alt={`Car ${index + 1}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="caritem__right">
              <div className="caritem__right__top">
                <div className="caritem__box">
                  <p className="caritem__aedText">
                    AED 0 / <span> $ 0</span>
                  </p>
                  <p className="caritem__perDay">per day</p>
                  <p className="caritem__price">AED / $</p>
                </div>
                <div className="caritem__box">
                  <p className="caritem__deposit">Deposit</p>
                  <p className="caritem__deposit">Premium protection</p>
                </div>
                <div className="caritem__box">
                  <p className="caritem__aed">AED {item?.deposit}</p>
                  <p className="caritem__paymet">
                    AED 5000 for credit cards payment
                  </p>
                  <p className="caritem__aed">AED {item?.premium_protection}</p>
                  <p className="caritem__paymet">
                    AED 5000 for price for 1 day
                  </p>
                </div>
              </div>
              <div className="caritem__right__bottom">
                <div className="caritem__table">
                  <thead>
                    <tr>
                      <th className="icon">
                        <CiCalendarDate />
                      </th>
                      <th className="icon">
                        <CiTimer />
                      </th>
                      <th className="icon">
                        <IoIosSpeedometer />
                      </th>
                      <th className="icon">
                        <CiUser />
                      </th>
                      <th className="icon">
                        <IoColorPaletteOutline />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{item?.year}</td>
                      <td>{item?.seconds}</td>
                      <td>{item?.max_speed}</td>
                      <td>{item?.max_people}</td>
                      <td>{item?.color}</td>
                    </tr>
                  </tbody>
                </div>
                <div className="caritem__table">
                  <thead>
                    <tr>
                      <th className="icon">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 256 256"
                          color="#485460"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ color: "rgb(72, 84, 96)" }}
                        >
                          <path
                            d="M248,120v48a8,8,0,0,1-8,8H224l-37.66,37.66a8,8,0,0,1-5.65,2.34H103.31a8,8,0,0,1-5.65-2.34L58.34,174.34A8,8,0,0,1,56,168.69V80a8,8,0,0,1,8-8H180.69a8,8,0,0,1,5.65,2.34L224,112h16A8,8,0,0,1,248,120Z"
                            opacity="0.2"
                          ></path>
                          <path d="M240,104H227.31L192,68.69A15.86,15.86,0,0,0,180.69,64H140V40h24a8,8,0,0,0,0-16H100a8,8,0,0,0,0,16h24V64H64A16,16,0,0,0,48,80v52H24V108a8,8,0,0,0-16,0v64a8,8,0,0,0,16,0V148H48v20.69A15.86,15.86,0,0,0,52.69,180L92,219.31A15.86,15.86,0,0,0,103.31,224h77.38A15.86,15.86,0,0,0,192,219.31L227.31,184H240a16,16,0,0,0,16-16V120A16,16,0,0,0,240,104Zm0,64H224a8,8,0,0,0-5.66,2.34L180.69,208H103.31L64,168.69V80H180.69l37.65,37.66A8,8,0,0,0,224,120h16Z"></path>
                        </svg>
                      </th>
                      <th className="icon">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 384 512"
                          color="#485460"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            color: "rgb(72, 84, 96)",
                            "--darkreader-inline-color": "#b3aca2",
                            "--darkreader-inline-fill": "currentColor",
                            "--darkreader-inline-stroke": "currentColor",
                          }}
                        >
                          <path d="M0 64C0 46.3 14.3 32 32 32H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64zM0 192c0-17.7 14.3-32 32-32H192 352c17.7 0 32 14.3 32 32s-14.3 32-32 32H224V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V224H32c-17.7 0-32-14.3-32-32z"></path>
                        </svg>
                      </th>
                      <th className="icon">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          color="#485460"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            color: "rgb(72, 84, 96)",
                            "--darkreader-inline-color": "#b3aca2",
                            "--darkreader-inline-stroke": "currentColor",
                          }}
                        >
                          <line x1="6" x2="6" y1="3" y2="15"></line>
                          <circle cx="18" cy="6" r="3"></circle>
                          <circle cx="6" cy="18" r="3"></circle>
                          <path d="M18 9a9 9 0 0 1-9 9"></path>
                        </svg>
                      </th>
                      <th className="icon">
                        <FaGasPump />
                      </th>
                      <th className="icon">
                        <IoCarSportOutline />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{item?.motor}</td>
                      <td>{item?.transmission}</td>
                      <td>{item?.drive_side}</td>
                      <td>{item?.petrol}</td>
                      <td>{item?.city?.name} cars</td>
                    </tr>
                  </tbody>
                </div>
              </div>
              <div
                className="caritem__buttons"
                style={{ display: "flex", gap: "1rem" }}
              >
                <a
                  aria-current="page"
                  className="caritem__links active"
                  href="https://web.whatsapp.com/"
                  style={{ color: "white", fontSize: "2rem" }}
                >
                  <FaWhatsapp style={{ color: "white", fontSize: "2rem" }} />
                </a>
                <a
                  aria-current="page"
                  className="caritem__links active"
                  href="https://t.me/s/Uzb_malibu"
                  style={{ color: "white", fontSize: "2rem" }}
                >
                  <FaTelegram style={{ color: "white", fontSize: "2rem" }} />
                </a>
                <a
                  aria-current="page"
                  className="caritem__links active"
                  href="https://chevrolet.uz/malibu-xl"
                  style={{ color: "white", fontSize: "2rem" }}
                >
                  <BsTelephoneFill
                    style={{ color: "white", fontSize: "2rem" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="caritem__bottom">
            <div className="caritem__bottom-left">
              <h3 className="caritem__subtitle">
                Good to know {item?.model?.name} ({item?.color})
              </h3>
              <p className="caritem__subtext">Kilometrage limit per day</p>
              <h4 className="caritem__secondtitle">
                {item?.max_speed} KM Every extra km will be charged 20 AED/km
              </h4>
              <p className="caritem__subtext">Car rental deposit amount</p>
              <h5 className="caritem__tourthtitle">
                The deposit is refunded within 28 days
              </h5>
            </div>
            <div className="caritem__bottom-right">
              <div className="caritem__infoForm">
                <form className="caritem__form" onSubmit={handleSubmit}>
                  <input
                    className="caritem__form__input"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <input
                    className="caritem__form__input"
                    type="number"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                  <input
                    className="caritem__form__input"
                    type="text"
                    placeholder="Details"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    required
                  />
                  <input
                    className="caritem__form__button"
                    type="submit"
                    value="Send"
                    required
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsItem;
