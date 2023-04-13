import React from "react";
import { Routes, Route } from "react-router-dom";
import Router from "../src/router";

const App = () => {
  return (
    <Routes>
      {Router &&
        Router.map((el, index) => (
          <Route key={index} path={el.path} element={el.component} />
        ))}
    </Routes>
  );
};

export default App;
