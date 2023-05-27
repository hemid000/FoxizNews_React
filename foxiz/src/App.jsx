import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";

import { Routes, Route } from "react-router-dom";
import Router from "../src/router";
import ToTopButton from "./Components/ToTopButton/ToTopButton";
import SplashScreen from "./Components/SplashScreen/SplashScreen";
import Layout from "./Components/Layout/Layout";
import "./App.scss";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const [resetState, setResetState] = useState(false);

  return (
    <>
      <ScrollToTop />
      {loading ? (
        <SplashScreen />
      ) : (
        <Routes>
          {Router &&
            Router.map((el, index) => (
              <Route key={index} path={el.path} element={el.component} />
            ))}
        </Routes>
      )}{" "}
      <ToastContainer />
      <ToTopButton />
    </>
  );
};

export default App;
