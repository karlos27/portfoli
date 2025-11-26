import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n.config";

import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import AboutMe from "./routes/AboutMe";
import Experience from "./routes/Experience";

import "./index.css";
import { Routes, Route, useLocation } from "react-router";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <main className="app-main page-fade" key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<AboutMe />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <div className="app-container">
          <Nav />
          <AnimatedRoutes />
          <Footer />
        </div>
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);
