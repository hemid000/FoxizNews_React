import React from "react";
import "./PoliticsInfo.scss";
// import { BsBookmark, BsBookmarkFill, BsSun } from "react-icons/bs";
import { Politics, Politics2, Politics3 } from "../../../Mock/HomeMock";
import image2 from "../../../../Assets/sponser2.webp";
const PoliticsInfo = () => {
  return (
    <section id="PoliticsInfo">
      <div className="container">
        <div className="row g-3">
          <p id="editor_p">Politics</p>

          <div className="col-lg-3">
            {Politics &&
              Politics.map((el) => {
                return (
                  <div key={el.id} className="cart">
                    <div className="img">
                      <div className="box">
                        <p id="line">{el.tag}</p>
                      </div>
                      <img src={el.imgSrc} alt="" />
                    </div>
                    <p id="info">{el.shortinfo}</p>
                    <div className="down_side">
                      <div className="down_right">
                        <span>{el.name}</span>
                      </div>
                      <div className="down_left">
                        <span>{el.time}</span>
                      </div>{" "}
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="col-lg-6">
            {Politics2 &&
              Politics2.map((el) => {
                return (
                  <div key={el.id} className="cart2">
                    <div className="img">
                      <div className="box">
                        <p id="line">{el.tag}</p>
                      </div>
                      <img src={el.imgSrc} alt="" />
                    </div>
                    <p id="info">{el.shortinfo}</p>
                    <span>{el.short_span_info}</span>
                    <div className="down_side">
                      <div className="down_right">
                        <span>{el.name}</span>
                      </div>
                      <div className="down_left">
                        <span>{el.time}</span>
                      </div>{" "}
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="col-lg-3">
            {Politics3 &&
              Politics3.map((el) => {
                return (
                  <div key={el.id} className="cart">
                    <div className="img">
                      <div className="box">
                        <p id="line">{el.tag}</p>
                      </div>
                      <img src={el.imgSrc} alt="" />
                    </div>
                    <p id="info">{el.shortinfo}</p>
                    <div className="down_side">
                      <div className="down_right">
                        <span>{el.name}</span>
                      </div>
                      <div className="down_left">
                        <span>{el.time}</span>
                      </div>{" "}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row middle">
          <p>-Sponsored-</p>

          <div className="col-lg-6 sponsor">
            <img src={image2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoliticsInfo;
