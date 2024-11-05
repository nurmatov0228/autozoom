import React from "react";
import "../styles/cars.scss";

const CarsPage = () => {
  return (
    <section className="cars">
      <div className="container">
        <div className="cars__container">
          <aside className="filter">
            <div className="filter-container">
              <h3 class="filter-title">Filter by</h3>
              
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default CarsPage;
