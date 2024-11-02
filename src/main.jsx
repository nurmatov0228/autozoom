import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import "./index.scss";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

createRoot(document.getElementById("root")).render(
  <Router>
    {/* <StrictMode> */}
    <App />
    {/* </StrictMode> */}
  </Router>
);
