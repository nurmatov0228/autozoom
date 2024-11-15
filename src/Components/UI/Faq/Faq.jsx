import React, { useState } from "react";
import "./faq.scss";

const Faq = () => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [modal5, setModal5] = useState(false);
  const handleModal1 = () => {
    setModal1((prev) => !prev);
  };
  const handleModal2 = () => {
    setModal2((prev) => !prev);
  };
  const handleModal3 = () => {
    setModal3((prev) => !prev);
  };
  const handleModal4 = () => {
    setModal4((prev) => !prev);
  };
  const handleModal5 = () => {
    setModal5((prev) => !prev);
  };
  return (
    <div className="faq">
      <div className="about__container">
        <div className="faq__wrapper">
          <h2 className="contact__title">FAQ</h2>
          <div className="faq__items">
            <div className="faq__item">
              <h3 className="faq__name" onClick={() => handleModal1()}>
                <div data-v-fa1e103a="" className="leftstrelka">
                  <svg
                    data-v-fa1e103a=""
                    width="22px"
                    className={`anim ${
                      modal1 === true ? "bottom" : "leftanimation"
                    }`}
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g data-v-fa1e103a="" id="Layer_67" data-name="Layer 67">
                      <path
                        data-v-fa1e103a=""
                        d="m35.21 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.15 26.72 22.15 26.72a2 2 0 0 1 -1.54 3.28z"
                      ></path>
                      <path
                        data-v-fa1e103a=""
                        d="m52 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.16 26.72 22.16 26.72a2 2 0 0 1 -1.54 3.28z"
                      ></path>
                    </g>
                  </svg>
                </div>
                What is the minimum age requirements to rent a car in Dubai ?
                <div data-v-fa1e103a="" className="rightstrelka">
                  <svg
                    data-v-fa1e103a=""
                    width="22px"
                    className={`anim ${
                      modal1 === true ? "bottom" : "rightanimation"
                    }`}
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g data-v-fa1e103a="" id="Layer_67" data-name="Layer 67">
                      <path
                        data-v-fa1e103a=""
                        d="m35.21 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.15 26.72 22.15 26.72a2 2 0 0 1 -1.54 3.28z"
                      ></path>
                      <path
                        data-v-fa1e103a=""
                        d="m52 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.16 26.72 22.16 26.72a2 2 0 0 1 -1.54 3.28z"
                      ></path>
                    </g>
                  </svg>
                </div>
              </h3>
              <div
                className={`faq__accordion ${
                  modal1 === true ? "open-acc" : "close-acc"
                }`}
              >
                Drivers under 25 must have a license for a minimum of three
                years. The same applies for the person(s) whose name(s) is/are
                mentioned as additional driver.
              </div>
            </div>
            <hr
              className={`contact__hr ${
                modal1 === true ? "no-scale" : "scale"
              }`}
            />
            <div className="faq__item">
              <h3 className="faq__name" onClick={() => handleModal2()}>
                <div data-v-fa1e103a="" className="leftstrelka">
                  <svg
                    data-v-fa1e103a=""
                    width="22px"
                    className={`anim ${
                      modal2 === true ? "bottom" : "leftanimation"
                    }`}
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g data-v-fa1e103a="" id="Layer_67" data-name="Layer 67">
                      <path
                        data-v-fa1e103a=""
                        d="m35.21 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.15 26.72 22.15 26.72a2 2 0 0 1 -1.54 3.28z"
                      ></path>
                      <path
                        data-v-fa1e103a=""
                        d="m52 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.16 26.72 22.16 26.72a2 2 0 0 1 -1.54 3.28z"
                      ></path>
                    </g>
                  </svg>
                </div>
                What do you need for a luxury car rental in Dubai ?
                <div data-v-fa1e103a="" className="rightstrelka">
                  <svg
                    data-v-fa1e103a=""
                    width="22px"
                    className={`anim ${
                      modal2 === true ? "bottom" : "rightanimation"
                    }`}
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g data-v-fa1e103a="" id="Layer_67" data-name="Layer 67">
                      <path
                        data-v-fa1e103a=""
                        d="m35.21 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.15 26.72 22.15 26.72a2 2 0 0 1 -1.54 3.28z"
                      ></path>
                      <path
                        data-v-fa1e103a=""
                        d="m52 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.16 26.72 22.16 26.72a2 2 0 0 1 -1.54 3.28z"
                      ></path>
                    </g>
                  </svg>
                </div>
              </h3>
              <div
                className={`faq__accordion ${
                  modal2 === true ? "open-acc" : "close-acc"
                }`}
              >
                Drivers shall be required to have a valid driver's license and
                Passport copy.
              </div>
            </div>
            <hr
              className={`contact__hr ${
                modal2 === true ? "no-scale" : "scale"
              }`}
            />
            <div className="faq__item">
              <h3 className="faq__name" onClick={() => handleModal3()}>
                <div data-v-fa1e103a="" className="leftstrelka">
                  <svg
                    data-v-fa1e103a=""
                    width="22px"
                    className={`anim ${
                      modal3 === true ? "bottom" : "leftanimation"
                    }`}
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g data-v-fa1e103a="" id="Layer_67" data-name="Layer 67">
                      <path
                        data-v-fa1e103a=""
                        d="m35.21 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.15 26.72 22.15 26.72a2 2 0 0 1 -1.54 3.28z"
                      ></path>
                      <path
                        data-v-fa1e103a=""
                        d="m52 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.16 26.72 22.16 26.72a2 2 0 0 1 -1.54 3.28z"
                      ></path>
                    </g>
                  </svg>
                </div>
                How much is the Insurance limit on luxury car rental Dubai?
                <div data-v-fa1e103a="" className="rightstrelka">
                  <svg
                    data-v-fa1e103a=""
                    width="22px"
                    className={`anim ${
                      modal3 === true ? "bottom" : "rightanimation"
                    }`}
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g data-v-fa1e103a="" id="Layer_67" data-name="Layer 67">
                      <path
                        data-v-fa1e103a=""
                        d="m35.21 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.15 26.72 22.15 26.72a2 2 0 0 1 -1.54 3.28z"
                      ></path>
                      <path
                        data-v-fa1e103a=""
                        d="m52 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.16 26.72 22.16 26.72a2 2 0 0 1 -1.54 3.28z"
                      ></path>
                    </g>
                  </svg>
                </div>
              </h3>
              <div
                className={`faq__accordion ${
                  modal3 === true ? "open-acc" : "close-acc"
                }`}
              >
                Includes an overall Motor Vehicle Insurance. 3000-5000 AED for
                Excess Luxury Cars. 7000-10000 AED for Sports Cars.
              </div>
            </div>
            <hr
              className={`contact__hr ${
                modal3 === true ? "no-scale" : "scale"
              }`}
            />
            <div className="faq__item">
              <h3 className="faq__name" onClick={() => handleModal4()}>
                <div data-v-fa1e103a="" className="leftstrelka">
                  <svg
                    data-v-fa1e103a=""
                    width="22px"
                    className={`anim ${
                      modal4 === true ? "bottom" : "leftanimation"
                    }`}
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g data-v-fa1e103a="" id="Layer_67" data-name="Layer 67">
                      <path
                        data-v-fa1e103a=""
                        d="m35.21 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.15 26.72 22.15 26.72a2 2 0 0 1 -1.54 3.28z"
                      ></path>
                      <path
                        data-v-fa1e103a=""
                        d="m52 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.16 26.72 22.16 26.72a2 2 0 0 1 -1.54 3.28z"
                      ></path>
                    </g>
                  </svg>
                </div>
                What are the driving licenses that can be used in Arab countries
                ?
                <div data-v-fa1e103a="" className="rightstrelka">
                  <svg
                    data-v-fa1e103a=""
                    width="22px"
                    className={`anim ${
                      modal4 === true ? "bottom" : "rightanimation"
                    }`}
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g data-v-fa1e103a="" id="Layer_67" data-name="Layer 67">
                      <path
                        data-v-fa1e103a=""
                        d="m35.21 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.15 26.72 22.15 26.72a2 2 0 0 1 -1.54 3.28z"
                      ></path>
                      <path
                        data-v-fa1e103a=""
                        d="m52 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.16 26.72 22.16 26.72a2 2 0 0 1 -1.54 3.28z"
                      ></path>
                    </g>
                  </svg>
                </div>
              </h3>
              <div
                className={`faq__accordion ${
                  modal4 === true ? "open-acc" : "close-acc"
                }`}
              >
                Local driving license for UAE citizens. International driving
                licenses issued by the following countries: 1. Kingdom of Saudi
                Arabia, 2. Egypt, 3. Bahrain, 4. Jordan, 5. Kuwait, 6. Tunisia,
                7. Sultanate of Oman, 8. Algeria, 9. Qatar, 10. Morocco, 11.
                Sudan, 12. Somalia, 13. Palestine, 14. Lebanon, 15. Libya, 16.
                Syria, 17 Yemen, 18. Iraq, 19. Djibouti, 20. Comoros, 21.
                Mauritania.
              </div>
            </div>
            <hr
              className={`contact__hr ${
                modal4 === true ? "no-scale" : "scale"
              }`}
            />
            <div className="faq__item">
              <h3 className="faq__name" onClick={() => handleModal5()}>
                <div data-v-fa1e103a="" className="leftstrelka">
                  <svg
                    data-v-fa1e103a=""
                    width="22px"
                    className={`anim ${
                      modal5 === true ? "bottom" : "leftanimation"
                    }`}
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g data-v-fa1e103a="" id="Layer_67" data-name="Layer 67">
                      <path
                        data-v-fa1e103a=""
                        d="m35.21 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.15 26.72 22.15 26.72a2 2 0 0 1 -1.54 3.28z"
                      ></path>
                      <path
                        data-v-fa1e103a=""
                        d="m52 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.16 26.72 22.16 26.72a2 2 0 0 1 -1.54 3.28z"
                      ></path>
                    </g>
                  </svg>
                </div>
                Can anyone else drive the car i rent?
                <div data-v-fa1e103a="" className="rightstrelka">
                  <svg
                    data-v-fa1e103a=""
                    width="22px"
                    className={`anim ${
                      modal5 === true ? "bottom" : "rightanimation"
                    }`}
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g data-v-fa1e103a="" id="Layer_67" data-name="Layer 67">
                      <path
                        data-v-fa1e103a=""
                        d="m35.21 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.15 26.72 22.15 26.72a2 2 0 0 1 -1.54 3.28z"
                      ></path>
                      <path
                        data-v-fa1e103a=""
                        d="m52 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.16 26.72 22.16 26.72a2 2 0 0 1 -1.54 3.28z"
                      ></path>
                    </g>
                  </svg>
                </div>
              </h3>
              <div
                className={`faq__accordion ${
                  modal5 === true ? "open-acc" : "close-acc"
                }`}
              >
                The contract prescribes two drivers, but at the time of filling
                out the contract, you must provide a driver's license and
                passport.
              </div>
            </div>
            <hr
              className={`contact__hr ${
                modal5 === true ? "no-scale" : "scale"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
