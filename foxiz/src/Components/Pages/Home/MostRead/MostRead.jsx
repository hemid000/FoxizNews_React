import React from "react";
import "../MostRead/MostRead.scss";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { HomeMockshort, Mostread } from "../../../Mock/HomeMock";

const MostRead = () => {
  return (
    <section id="mostread">
      <div className="container">
        <p id="editor_p">Most Read</p>

        <div className="row mt-3">
          <div className="col-lg-6 left_side">
            <div className="img">
              <img
                src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/b19-615x410.jpg"
                alt=""
              />
              <div className="short_info">
                <div className="box">
                  <p id="line">BUSINESS</p>
                </div>
                <p>How My Phone’s Most Annoying Feature Saved My Life</p>

                <div className="down_side">
                  <div className="down_left">
                    <img
                      src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/emm-60x60.jpg"
                      alt=""
                    />
                    <p>Taylor Emma</p>
                    <span>Oct 1, 2021</span>
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
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row g-3">
              {Mostread &&
                Mostread.slice(0, 2).map((el) => {
                  return (
                    <div key={el.id} className="col-lg-6">
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

      <div className="container mt-5">
        <div className="row g-3">
          {HomeMockshort &&
            HomeMockshort.slice(0, 3).map((el) => {
              return (
                <div className="col-lg-4">
                  <div className="info">
                    <div key={el.id} className="info_short">
                      <img src={el.imgSrc} alt="" />
                      <div className="info_right">
                        <p>{el.shortinfo}</p>
                        <span>{el.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default MostRead;
