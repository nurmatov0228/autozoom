import React, { useState } from "react";
import "./faq.scss";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqItems = [
    {
      question: "What is the minimum age requirements to rent a car in Dubai?",
      answer:
        "Drivers under 25 must have a license for a minimum of three years. The same applies for the person(s) whose name(s) is/are mentioned as additional driver.",
    },
    {
      question: "What do you need for a luxury car rental in Dubai?",
      answer:
        "Drivers shall be required to have a valid driver's license and Passport copy.",
    },
    {
      question: "How much is the Insurance limit on luxury car rental Dubai?",
      answer:
        "Includes an overall Motor Vehicle Insurance. 3000-5000 AED for Excess Luxury Cars. 7000-10000 AED for Sports Cars.",
    },
    {
      question:
        "What are the driving licenses that can be used in Arab countries?",
      answer:
        "Local driving license for UAE citizens. International driving licenses issued by the following countries: 1. Kingdom of Saudi Arabia, 2. Egypt, 3. Bahrain, 4. Jordan, 5. Kuwait, 6. Tunisia, 7. Sultanate of Oman, 8. Algeria, 9. Qatar, 10. Morocco, 11. Sudan, 12. Somalia, 13. Palestine, 14. Lebanon, 15. Libya, 16. Syria, 17 Yemen, 18. Iraq, 19. Djibouti, 20. Comoros, 21. Mauritania.",
    },
    {
      question: "Can anyone else drive the car i rent?",
      answer:
        "The contract prescribes two drivers, but at the time of filling out the contract, you must provide a driver's license and passport.",
    },
  ];

  return (
    <div className="faq">
      <div className="about__container">
        <div className="faq__wrapper">
          <h2 className="contact__title">FAQ</h2>
          <div className="faq__items">
            {faqItems.map((item, index) => (
              <>
                <div key={index} className="faq__item">
                  <h3
                    className="faq__name"
                    onClick={() => toggleAccordion(index)}
                  >
                    <div data-v-fa1e103a="" className="leftstrelka">
                      <svg
                        data-v-fa1e103a=""
                        width="22px"
                        className={`anim ${
                          activeIndex === index ? "bottom" : "leftanimation"
                        }`}
                        viewBox="0 0 64 64"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M35.21 62a2 2 0 0 1-1.54-.72L10.46 33.28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55L14.6 33l22.15 26.72a2 2 0 0 1-1.54 3.28z" />
                        <path d="M52 62a2 2 0 0 1-1.54-.72L27.25 33.28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55L30.48 33l22.15 26.72a2 2 0 0 1-1.54 3.28z" />
                      </svg>
                    </div>
                    {item.question}
                    <div data-v-fa1e103a="" className="rightstrelka">
                      <svg
                        data-v-fa1e103a=""
                        width="22px"
                        className={`anim ${
                          activeIndex === index ? "bottom" : "rightanimation"
                        }`}
                        viewBox="0 0 64 64"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M35.21 62a2 2 0 0 1-1.54-.72L10.46 33.28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55L14.6 33l22.15 26.72a2 2 0 0 1-1.54 3.28z" />
                        <path d="M52 62a2 2 0 0 1-1.54-.72L27.25 33.28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55L30.48 33l22.15 26.72a2 2 0 0 1-1.54 3.28z" />
                      </svg>
                    </div>
                  </h3>
                  <div
                    className={`faq__accordion ${
                      activeIndex === index ? "open-acc" : "close-acc"
                    }`}
                  >
                    {item.answer}
                  </div>
                </div>
                <hr
                  className={`contact__hr ${
                    activeIndex === index ? "no-scale" : "scale"
                  }`}
                />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
