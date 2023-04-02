import React from "react";
import { useSwiper } from "swiper/react";
import "../SwiperButton/SwiperButton.scss";
export const SwiperButton = () => {
  const swiper = useSwiper();
  return (
    <div className="Swiper_btn">
      <button
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        Previous
      </button>
      <button
        onClick={() => {
          swiper.slideNext();
        }}
      >
        Next
      </button>
    </div>
  );
};
