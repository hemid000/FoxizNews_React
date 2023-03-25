import React, { useState } from "react";
import "../NewsInfo/NewsInfo.scss";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

const NewsInfo = (probs) => {
  const notify = probs.notify;
  const handleClick = probs.handleClick;
  const handleClick2 = probs.handleClick2;
  const handleClick3 = probs.handleClick3;
  const handleClick4 = probs.handleClick4;
  const handleClick5 = probs.handleClick5;
  const handleClick6 = probs.handleClick6;
  const save = probs.save;
  const unsave = probs.unsave;
  const save2 = probs.save2;
  const unsave2 = probs.unsave2;
  const save3 = probs.save3;
  const unsave3 = probs.unsave3;

  return (
    <section id="NewsInfo">
      <div className="container">
        <div className="row g-3">
          <div className="col-lg-8 left_side">
            <div className="img">
              <img
                src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/t54-1-860x573.jpg"
                alt=""
              />
              <div className="short_info">
                <div className="box">
                  <p id="line">Technology</p>
                </div>
                <p>How My Phone’s Most Annoying Feature Saved My Life</p>

                <span>
                  Modern technology has become a total phenomenon for
                  civilization, the defining force of a new social order in
                  which efficiency is no longer an option but a necessity
                  imposed on all human activity.
                </span>
                <div className="down_side">
                  <div className="down_left">
                    <img
                      src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/emm-60x60.jpg"
                      alt=""
                    />
                    <p>Taylor Emma</p>
                    <span>Oct 1, 2021</span>
                  </div>{" "}
                  {save && (
                    <div onClick={handleClick} className="">
                      <BsBookmark
                        onClick={notify}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  )}
                  {unsave && (
                    <div onClick={handleClick2} className="">
                      <BsBookmarkFill style={{ cursor: "pointer" }} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 right_side">
            <div className="row g-3">
              <div className="col-lg-12">
                {" "}
                <div className="img2">
                  <img
                    src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/e30-860x573.jpg"
                    alt=""
                  />
                  <div className="short_info">
                    <div className="box">
                      <p id="line">ENTERTAINMENT</p>
                    </div>
                    <p>
                      Kuo’s Favorite Levi’s Denim Shorts Are 40% Off on Amazon
                    </p>

                    <div className="down_side">
                      <div className="down_left">
                        <img
                          src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/emm-60x60.jpg"
                          alt=""
                        />
                        <p>Taylor Emma</p>
                        <span>Oct 1, 2021</span>
                      </div>
                      {save2 && (
                        <div onClick={handleClick3} className="">
                          <BsBookmark
                            onClick={notify}
                            style={{ cursor: "pointer" }}
                          />
                        </div>
                      )}
                      {unsave2 && (
                        <div onClick={handleClick4} className="">
                          <BsBookmarkFill style={{ cursor: "pointer" }} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                {" "}
                <div className="img2">
                  <img
                    src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/b25-860x573.jpg"
                    alt=""
                  />
                  <div className="short_info">
                    <div className="box">
                      <p id="line">ENTERTAINMENT</p>
                    </div>
                    <p>Britain’s Most Unusual Homes for Sale This Year</p>

                    <div className="down_side">
                      <div className="down_left">
                        <img
                          src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/emm-60x60.jpg"
                          alt=""
                        />
                        <p>Taylor Emma</p>
                        <span>Oct 1, 2021</span>
                      </div>

                      <div onClick={handleClick5} className="">
                        {save3 && (
                          <BsBookmark
                            onClick={notify}
                            style={{ cursor: "pointer" }}
                          />
                        )}
                      </div>

                      {unsave3 && (
                        <div onClick={handleClick6} className="">
                          <BsBookmarkFill style={{ cursor: "pointer" }} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsInfo;
