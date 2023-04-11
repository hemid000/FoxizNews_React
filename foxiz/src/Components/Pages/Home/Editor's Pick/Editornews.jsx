import React, { useState } from "react";
import "../Editor's Pick/News.scss";
import { BsBookmark, BsBookmarkFill, BsSun } from "react-icons/bs";
import { HomeMock } from "../../../Mock/HomeMock";
import { TiWeatherCloudy } from "react-icons/ti";
import { Follow } from "../../../Mock/HomeMock";
import { ToastContainer, toast } from "react-toastify";

const Editornews = () => {
  const notify = () => toast("Saved!");

  const [save, setSave] = useState(true);
  const [unsave, setUnsave] = useState(false);
  const [save2, setSave2] = useState(true);
  const [unsave2, setUnsave2] = useState(false);
  const handleClick = () => {
    setSave(false);
    setUnsave(true);
  };
  const handleClick2 = () => {
    setSave(true);
    setUnsave(false);
  };
  const handleClick3 = () => {
    setSave2(false);
    setUnsave2(true);
  };
  const handleClick4 = () => {
    setSave2(true);
    setUnsave2(false);
  };
  return (
    <section id="editor_news">
      <div className="container">
        <div className="row ">
          <p id="editor_p">Editor's Pick</p>
          <div className="col-lg-8 col-md-12">
            <div className="row d-flex align-items-center">
              <div className="col-lg-6">
                <div className="right_side">
                  <div className="first">
                    <p id="info">
                      Corsair HS80 RGB Wireless Gaming Headset Review{" "}
                    </p>
                    <div className="down_side">
                      <div className="down_left">
                        <div className="color">
                          <div className="col1"></div>
                          <div className="col2"></div>
                          <div className="col3"></div>
                          <div className="col4"></div>
                          <div className="col5"></div>
                        </div>
                        <p>9.6 out of 10</p>
                        <span>Good Place</span>
                      </div>{" "}
                    </div>
                    <span id="infospan">
                      As for quality, the HS80's provided clear-cut sound with
                      adequate bass and…
                    </span>
                    <div className="down_side">
                      <div className="down_left">
                        <img
                          src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/av2-60x60.jpg"
                          alt=""
                        />
                        <p>Jacob</p>
                        <span>Sep 19, 2021</span>
                      </div>{" "}
                      {save2 && (
                        <div onClick={handleClick3} className="">
                          <BsBookmark
                            onClick={notify}
                            style={{ cursor: "pointer", margin: "0 20px 0 0" }}
                          />
                        </div>
                      )}
                      {unsave2 && (
                        <div onClick={handleClick4} className="">
                          <BsBookmarkFill
                            style={{ cursor: "pointer", margin: "0 20px 0 0" }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="second">
                  <div className="img">
                    <div className="box">
                      <p id="line">Technology</p>
                    </div>
                    <img
                      src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/t102-615x410.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="container mt-4">
              <div className="row g-3">
                {HomeMock &&
                  HomeMock.map((el) => {
                    return (
                      <div key={el.id} className="col-lg-4 col-md-4 col-6 ">
                        <div className="cart">
                          <div className="img">
                            <div className="box">
                              <p id="line">{el.tag}</p>
                            </div>
                            <img src={el.imgSrc} alt="" />
                          </div>
                          <p id="info">{el.shortinfo}</p>
                          <div className="down_side">
                            <div className="down_left">
                              <span>{el.time}</span>
                            </div>{" "}
                            {/* {save && (
                              <div onClick={handleClick} className="">
                                <BsBookmark
                                  onClick={notify}
                                  style={{
                                    cursor: "pointer",
                                    margin: "0 20px 0 0",
                                  }}
                                />
                              </div>
                            )}
                            {unsave && (
                              <div onClick={handleClick2} className="">
                                <BsBookmarkFill
                                  style={{
                                    cursor: "pointer",
                                    margin: "0 20px 0 0",
                                  }}
                                />
                              </div>
                            )} */}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="cart_forecast">
              <div className="row forecast">
                <div className="box_in">
                  {" "}
                  <div className="box">
                    <p id="line">Weather</p>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="weather">
                    <TiWeatherCloudy
                      style={{ fontSize: "66px", color: "#bebebe" }}
                    />
                    <p>New York</p>
                    <span>Sunny</span>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center justify-content-center">
                  <div className="weather_info">
                    <div className="left_side">
                      <p>4</p>
                      <span>°C</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row fore_info">
                <div className="info">
                  <div className="box">
                    <p id="line">Thu</p>
                  </div>
                  <BsSun />
                  <div className="left_side">
                    <p>4</p>
                    <span>°C</span>
                  </div>
                </div>
                <div className="info">
                  <div className="box">
                    <p id="line">Fri</p>
                  </div>
                  <BsSun />
                  <div className="left_side">
                    <p>4</p>
                    <span>°C</span>
                  </div>
                </div>
                <div className="info">
                  <div className="box">
                    <p id="line">Sat</p>
                  </div>
                  <BsSun />
                  <div className="left_side">
                    <p>4</p>
                    <span>°C</span>
                  </div>
                </div>
                <div className="info">
                  <div className="box">
                    <p id="line">Sun</p>
                  </div>
                  <BsSun />
                  <div className="left_side">
                    <p>4</p>
                    <span>°C</span>
                  </div>
                </div>
                <div className="info">
                  <div className="box">
                    <p id="line">Mon</p>
                  </div>
                  <BsSun />
                  <div className="left_side">
                    <p>4</p>
                    <span>°C</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="follow">
              <div className="container mt-2">
                <p id="editor_p">Follow Us</p>
                <div className="row g-2 mt-3">
                  {Follow &&
                    Follow.slice(0, 4).map((el) => {
                      return (
                        <div className="col-lg-6">
                          <div className="cart">
                            {el.logo}
                            <div className="box">
                              <p>{el.follow_info}</p>
                              <span>{el.like}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Editornews;
