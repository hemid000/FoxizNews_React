import React from "react";
import "../Editor's Pick/News.scss";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { HomeMock } from "../../../Mock/HomeMock";
const Editornews = () => {
  return (
    <section id="editor_news">
      <div className="container">
        <div className="row ">
          <p id="editor_p">Editor's Pick</p>
          <div className="col-lg-8">
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
                      {/*                   
                    <div className="">
                      <BsBookmarkFill style={{ cursor: "pointer" }} />
                    </div> */}
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
                      <div className="">
                        <BsBookmark
                          style={{ cursor: "pointer", margin: "0 20px 0 0" }}
                        />
                      </div>
                      {/*                   
                    <div className="">
                      <BsBookmarkFill style={{ cursor: "pointer" }} />
                    </div> */}
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
                      <div key={el.id} className="col-lg-4">
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
                            <div className="">
                              <BsBookmark
                                style={{
                                  cursor: "pointer",
                                  margin: "0 20px 0 0",
                                }}
                              />
                            </div>
                            {/*                   
                    <div className="">
                      <BsBookmarkFill style={{ cursor: "pointer" }} />
                    </div> */}
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
    </section>
  );
};

export default Editornews;
