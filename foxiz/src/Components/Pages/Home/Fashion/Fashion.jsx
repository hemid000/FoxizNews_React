import React from "react";
import "../Fashion/Fashion.scss";
import { Fashionnews } from "../../../Mock/HomeMock";
import { BsBookmark, BsBookmarkFill, BsSun } from "react-icons/bs";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SwiperButton } from "../../../SwiperButton/SwiperButton";

const Fashion = () => {
  return (
    <section id="fashion">
      <div className="container">
        <p id="editor_p">Fashion</p>
        <div className="row swiper_res g-5">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={1}
            navigation={true}
            loop={true}
            modules={[Pagination, Navigation]}
            className="Swiper_hotnews"
            // loop={true}
            // loopFillGroupWithBlank={true}
            // pagination={{
            //   clickable: true,
            // }}
            breakpoints={{
              300: {
                width: 300,
                slidesPerView: 1,
              },
              400: {
                width: 400,
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {Fashionnews &&
              Fashionnews.map((el) => {
                return (
                  <SwiperSlide>
                    <div key={el.id} className="cart">
                      <div className="img">
                        <div className="box">
                          <p id="line">{el.tag}</p>
                        </div>
                        <img src={el.imgSrc} alt="" />
                      </div>
                      <p id="info">{el.shortinfo}</p>
                      <div className="down_side">
                        <div className="down_left">
                          <img src={el.imgSrc2} alt="" />
                          <p>{el.name}</p>
                          <span>{el.time}</span>
                        </div>{" "}
                        {/* {save && ( */}
                        <div className="">
                          <BsBookmark style={{ cursor: "pointer" }} />
                        </div>
                        {/* )} */}
                        {/* {unsave && ( */}
                        {/* <div className="">
                    <BsBookmarkFill style={{ cursor: "pointer" }} />
                  </div> */}
                        {/* )} */}
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            <SwiperButton />
          </Swiper>
        </div>
      </div>{" "}
    </section>
  );
};

export default Fashion;
