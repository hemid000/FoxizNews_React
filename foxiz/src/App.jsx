import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Router from "../src/router";
import ToTopButton from "./Components/ToTopButton/ToTopButton";
const App = () => {
  return (
    <main>
      <Routes>
        {Router &&
          Router.map((el, index) => (
            <Route key={index} path={el.path} element={el.component} />
          ))}
      </Routes>

      <ToTopButton />
    </main>
  );
};

export default App;
