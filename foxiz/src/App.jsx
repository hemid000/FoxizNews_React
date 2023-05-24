import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";

import { Routes, Route } from "react-router-dom";
import Router from "../src/router";
import ToTopButton from "./Components/ToTopButton/ToTopButton";
import SplashScreen from "./Components/SplashScreen/SplashScreen";
import Layout from "./Components/Layout/Layout";
import "./App.scss";
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);
  return (
    <main>
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
    </main>
  );
};

export default App;
