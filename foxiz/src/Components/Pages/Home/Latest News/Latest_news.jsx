import React, { useState } from "react";
import "../Latest News/Latest_news.scss";
import { BsBookmark, BsBookmarkFill, BsSun } from "react-icons/bs";
import { Latest_news_home, Sponsort_info } from "../../../Mock/HomeMock";
import { MdNotificationsNone, MdOutlineShowChart } from "react-icons/md";
import Spinner from "react-bootstrap/Spinner";

const Latest_news = () => {
  const [moree, setMoree] = useState(true);
  const [spinner, setSpinner] = useState(false);
  return (
    <section id="latest_news">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <p id="editor_p">Latest News</p>
            <div className="large_section">
              {Latest_news_home &&
                Latest_news_home.map((el) => {
                  return (
                    <div
                      key={el.id}
                      className="row mt-5 d-flex align-items-center"
                    >
                      <div className="col-lg-8 col-md-8">
                        <div className="right_side">
                          <div className="first">
                            <p id="info">{el.info}</p>
                            <span id="infospan">{el.infospan}</span>
                            <div className="down_side">
                              <div className="down_left">
                                <img src={el.imgSrc1} alt="" />
                                <p>{el.name}</p>
                                <span>{el.time}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div className="second">
                          <div className="img">
                            <div className="box">
                              <p id="line">{el.type}</p>
                            </div>
                            <img src={el.imgSrc2} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>

            <div className="mobile_section">
              {" "}
              {Latest_news_home &&
                Latest_news_home.map((el) => {
                  return (
                    <div
                      key={el.id}
                      className="row mt-5 d-flex align-items-center"
                    >
                      <div className="col-lg-4 col-md-4">
                        <div className="second">
                          <div className="img">
                            <div className="box">
                              <p id="line">{el.type}</p>
                            </div>
                            <img src={el.imgSrc2} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-8">
                        <div className="right_side">
                          <div className="first">
                            <p id="info">{el.info}</p>
                            <span id="infospan">{el.infospan}</span>
                            <div className="down_side">
                              <div className="down_left">
                                <img src={el.imgSrc1} alt="" />
                                <p>{el.name}</p>
                                <span>{el.time}</span>
                              </div>
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
                      </div>
                    </div>
                  );
                })}
            </div>

            <div className="more">
              {moree && (
                <button
                  onClick={() => {
                    setMoree(false) || setSpinner(true);
                  }}
                  id="sign_in"
                >
                  Show More
                </button>
              )}
              {spinner && <Spinner animation="border" variant="danger" />}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="stick_right">
              <div className="learn">
                <div className="img">
                  <img
                    src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/sb-banner.jpg"
                    alt=""
                  />

                  <div className="box">
                    <p>Create an Amazing Newspaper</p>
                    <span>
                      Discover thousands of options, easy to customize layouts,
                      one-click to import demo and much more.
                    </span>
                    <button id="sign_in">Learn More</button>
                  </div>
                </div>
              </div>
              <div className="sponsored">
                <p id="editor_p">Sponsored Content</p>
                <div className="info_short">
                  {Sponsort_info &&
                    Sponsort_info.map((el) => {
                      return (
                        <div key={el.id} className="info">
                          <img src={el.imgSrc} alt="" />
                          <div className="box2">
                            <p>{el.info}</p>
                            <div className="add_info">
                              <MdNotificationsNone /> <p>{el.sponsor}</p>
                              <img src={el.imgSrc2} alt="" />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="corono_news">
                <p id="editor_p">Global Coronavirus Cases</p>
                <div className="content">
                  <p>
                    <MdOutlineShowChart />
                    Confirmed
                  </p>
                  <span>651.92M</span>
                </div>
                <div className="content">
                  <p>
                    <MdOutlineShowChart />
                    Death
                  </p>
                  <span>6.66M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Latest_news;
