import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import "../Layout/Layout.scss";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
