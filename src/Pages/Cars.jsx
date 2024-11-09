import React, { useEffect, useState, useRef } from "react";
import "../styles/cars.scss";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";

const CarsPage = () => {
  const API = `https://realauto.limsa.uz/api/cars`;
  const [base, setBase] = useState([]);
  const [model, setModel] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);
  const [loading, setLoading] = useState(true); // Yuklanish holati
  const [error, setError] = useState(null); // Xatolik holati
  const params = useParams();

  const carTypeRefs = useRef([]);
  const brandRefs = useRef([]);

  const fetchData = async () => {
    setLoading(true); // Ma'lumot yuklanayotganini bildirish
    setError(null); // Xatolikni tozalash
    try {
      const response = await axios.get(API);
      setBase(response?.data?.data || []);

      if (params?.id) {
        const selecCategories = response?.data?.data.filter(
          (e) => e?.id === params?.id
        );

        console.log(response?.data?.data);

        const newbase = response?.data?.data.filter(
          (e) => e?.category?.name_en == selecCategories[0]?.category?.name_en
        );

        console.log(newbase);

        setFilteredCars(newbase);
      } else if (params?.id === undefined) {
        setFilteredCars(response?.data?.data);
      }
    } catch (error) {
      setError("Ma'lumotlarni olishda xatolik yuz berdi.");
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Yuklanish tugadi
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleModelChange = (event) => {
    setModel(event.target.value);
  };

  const handleApplyFilter = (event) => {
    event.preventDefault();
    let filtered = base;

    if (model) {
      filtered = filtered.filter((item) => item?.model?.id === model);
    }

    const selectedCategories = carTypeRefs.current
      .filter((input) => input.checked)
      .map((input) => input.value);
    const selectedBrands = brandRefs.current
      .filter((input) => input.checked)
      .map((input) => input.value);

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((item) =>
        selectedCategories.includes(item?.category?.name_en)
      );
    }

    if (selectedBrands.length > 0) {
      filtered = filtered.filter((item) =>
        selectedBrands.includes(item?.brand?.title)
      );
    }

    setFilteredCars(filtered);
  };

  const handleResetFilter = () => {
    setModel("");
    setFilteredCars(base);
    carTypeRefs.current.forEach((input) => (input.checked = false));
    brandRefs.current.forEach((input) => (input.checked = false));
  };

  const uniqueCategories = [
    ...new Set(base.map((item) => item?.category?.name_en)),
  ];
  const uniqueBrands = [...new Set(base.map((item) => item?.brand?.title))];

  return (
    <section className="cars">
      <div className="cars__container">
        <aside className="filter">
          <div className="filter-container">
            <h3 className="filter-title">Filter by</h3>
            <form className="filter-part-car" onSubmit={handleApplyFilter}>
              <div className="filter-to-offer">
                <h4 className="part-title">Car type</h4>
                {uniqueCategories.map((category, index) => (
                  <label className="filter-labels" key={index}>
                    <input
                      className="filter-inputs"
                      type="checkbox"
                      name="carType"
                      value={category}
                      ref={(el) => (carTypeRefs.current[index] = el)}
                    />
                    {category}
                  </label>
                ))}
              </div>
              <div className="filter-to-offer">
                <h4 className="part-title">Brand</h4>
                {uniqueBrands.map((brand, index) => (
                  <label className="filter-labels" key={index}>
                    <input
                      className="filter-inputs"
                      type="checkbox"
                      name="brand"
                      value={brand}
                      ref={(el) => (brandRefs.current[index] = el)}
                    />
                    {brand}
                  </label>
                ))}
              </div>
              <div className="filter-to-offer">
                <h4 className="part-title">Model</h4>
                <select
                  className="filter-to-select"
                  value={model}
                  onChange={handleModelChange}
                >
                  <option value="" hidden>
                    Select Model
                  </option>
                  {base.map((item) => (
                    <option
                      key={item?.model?.id}
                      className="select-option-filter"
                      value={item?.model?.id}
                    >
                      {item?.model?.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="filter-buttons">
                <button
                  type="button"
                  className="reset-button"
                  onClick={handleResetFilter}
                >
                  Reset
                </button>
                <button type="submit" className="apply-button">
                  Apply Filter
                </button>
              </div>
            </form>
          </div>
        </aside>
        <div className="filter-cars">
          <div className="all-cars">
            {loading ? (
              <p className="loading">Loading...</p>
            ) : error ? (
              <p className="error-message">{error}</p>
            ) : filteredCars.length > 0 ? (
              filteredCars.map((item) => (
                <NavLink
                  to={`/caritem/${item?.id}`}
                  className="navlink"
                  key={item.id}
                >
                  <div className="filter-cars-card">
                    <div className="filter-cars-card-top">
                      <div className="cars-picture">
                        <img
                          className="ant-image-img"
                          src={`https://realauto.limsa.uz/api/uploads/images/${item?.car_images[0]?.image?.src}`}
                          alt={item?.name_en}
                          style={{ display: "block" }}
                        />
                      </div>
                      <h3 className="filter-cars-card-title">
                        {item?.brand?.title} {item?.model?.name}
                      </h3>
                      <h4 className="filter-cars-card-aed">
                        AED 0{" "}
                        <span className="filter-cars-card-usd">/ $ 0</span>
                      </h4>
                      <p className="renta-type">per day: {item?.limitperday}</p>
                    </div>
                    <div className="filter-cars-card-bottom">
                      <button className="btn-w">
                        <FaWhatsapp />
                        WhatsApp
                      </button>
                      <button className="btn-t">
                        <FaTelegram />
                        Telegram
                      </button>
                    </div>
                  </div>
                </NavLink>
              ))
            ) : (
              <p className="empty">Mashinalar topilmadi</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarsPage;
