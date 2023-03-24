import React from "react";
import "../HotNews/HotNews.scss";
import { AiOutlineFire } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
const HotNews = () => {
  return (
    <section id="quick_links">
      <div className="container">
        <div className="row">
          <div className="col-lg-1 p-0 left_side">
            <p id="hot_news">
              <AiOutlineFire />
              Hot News
            </p>
          </div>
          <div className="col-lg-7  middle_side">
            <div id="swiper">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                  clickable: true,
                }}
                // breakpoints={{
                //   300: {
                //     slidesPerView: 1,
                //     spaceBetween: 20,
                //   },
                //   400: {
                //     slidesPerView: 1,
                //     spaceBetween: 20,
                //   },
                //   500: {
                //     slidesPerView: 1,
                //     spaceBetween: 20,
                //   },
                //   600: {
                //     slidesPerView: 1,
                //     spaceBetween: 20,
                //   },
                //   640: {
                //     slidesPerView: 1,
                //     spaceBetween: 20,
                //   },
                //   768: {
                //     slidesPerView: 2,
                //     spaceBetween: 40,
                //   },
                //   1024: {
                //     slidesPerView: 3,
                //     spaceBetween: 50,
                //   },
                // }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <p>How My Phone’s Most Annoying Feature Saved My Life</p>
                </SwiperSlide>
                <SwiperSlide>
                  <p>Gout Drug Could Show Promise in Fighting COVID-19</p>
                </SwiperSlide>
                <SwiperSlide>
                  <p>
                    Business Casual: The Definitive Guide for Women To Be
                    Stylish At Work
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <p>
                    People in the Northeast Could Prevent a Covid-19 by
                    Following These Measures
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <p>
                    Google Must Allow Developers to Use Other Payment Systems
                  </p>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="col-lg-4 p-0 right_side">
            <span>Quick Links</span>
            <button id="sign_in">Technology</button>
            <button id="sign_in">Science</button>
            <button id="sign_in">Covid-19</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotNews;
