import React, { useEffect, useState } from "react";
import "../ToTopButton/ToTopButton.scss";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
const ToTopButton = () => {
  const [toTop, setToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
        setToTop(true);
      } else {
        setToTop(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      className={toTop ? "topbtn topbtn_visible" : "topbtn"}
      onClick={scrollUp}
    >
      <MdOutlineKeyboardDoubleArrowUp />
    </button>
  );
};

export default ToTopButton;
