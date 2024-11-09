import React from "react";
import "../styles/blog.scss";
import car1 from "../assets/cars1.jpg";
import car2 from "../assets/cars2.jpg";
import car3 from "../assets/cars3.jpg";
import { NavLink } from "react-router-dom";
const Blog = () => {
  return (
    <div className="blog">
      <div className="container">
        <div className="blog__container">
          <div className="blog_naviget">
            <NavLink to="/">Luxury Cars for Rent in Dubai / Blog</NavLink>
          </div>
          <div className="blog_title">
            <h1>Blog</h1>
          </div>
          <div className="blog_box">
            <div className="blog_box1">
              <div className="blog_img">
                <img width={200} height={250} src={car1} alt="" />
              </div>
              <div className="blog_text">
                <div className="blog_text1">
                  <h1>Top 3 Destinations to Visit in Dubai in a Rental Car</h1>
                </div>
                <div className="blog_text2">
                  <h3>
                    One of the main reasons to hire a car in Dubai is the
                    quality of the UAE roads. According to the World Economic
                    Forum, the Emirates belong to the top seven countries with
                    the most exemplary road infrastructure.
                  </h3>
                </div>
                <div className="blog_text3">
                  <p>25 Seb 2022</p>
                </div>
              </div>
            </div>

            <div className="page"><NavLink to="/blogview1">more</NavLink></div>

            <div className="blog_box1">
              <div className="blog_img">
                <img width={200} height={250} src={car2} alt="" />
              </div>
              <div className="blog_text">
                <div className="blog_text1">
                  <h1>
                    Top 5 wonderful spots for a car photo session in Dubai
                  </h1>
                </div>
                <div className="blog_text2">
                  <h3>
                    There are so many wonderful things to do in Dubai, but when
                    you rent a car your opportunities are nearly doubled. The
                    number of places you will die to go to and make memorable
                    pictures is such that it makes you impossible to resist to
                    hire a mode of transportation, if not for a day or two, then
                    at least for a couple of hours. And, while doing so, who
                    could prove against the weakness of taking a photo of
                    themselves inside or near the car they’ve rented?
                  </h3>
                </div>
                <div className="blog_text3">
                  <p>11 Feb 2022</p>
                </div>
              </div>
            </div>

            <div className="page"><NavLink  to="/blogview2">more</NavLink></div>

            <div className="blog_box1">
              <div className="blog_img">
                <img width={200} height={250} src={car3} alt="" />
              </div>
              <div className="blog_text">
                <div className="blog_text1">
                  <h1>Top 5 Reasons to Rent a Car Dubai Style this Summer</h1>
                </div>
                <div className="blog_text2">
                  <h3>
                    Summer is more than just a beach and a body, and Autozoom
                    Luxury Car Rental is more than just a regular car hire
                    business. We're your one-stop four-wheel solution to making
                    the most of your time in Dubai.
                  </h3>
                </div>
                <div className="blog_text3">
                  <p>31 Jul 2022</p>
                </div>
              </div>
            </div>
            <div className="page"><NavLink to="/blogview3">more</NavLink></div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Blog;
