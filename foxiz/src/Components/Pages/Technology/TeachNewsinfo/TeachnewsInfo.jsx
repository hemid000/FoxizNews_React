import React from "react";
import "../TeachNewsinfo/TeachnewsInfo.scss";
import image1 from "../../../../Assets/sponser1.webp";

const TeachnewsInfo = () => {
  return (
    <section id="teachnewsInfo">
      <div className="container">
        <div className="row g-3">
          <div className="col-lg-8 left_side">
            <div className="img">
              <img
                src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/t20-860x573.jpg"
                alt=""
              />
              <div className="short_info">
                <div className="box">
                  <p id="line">Technology</p>
                </div>
                <p>How to Mark Yourself ‘Safe’ on Socials Media</p>

                <span>
                  Modern technology has become a total phenomenon for
                  civilization, the defining force of a new social order in
                  which efficiency
                </span>
                <div className="down_side">
                  <div className="down_left">
                    <img
                      src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/emm-60x60.jpg"
                      alt=""
                    />
                    <p>Taylor Emma</p>
                    <span id="time_sp">Oct 1, 2021</span>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 right_side">
            <div className="row g-3">
              <div className="col-lg-12 col-md-6">
                {" "}
                <div className="img2">
                  <img
                    src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/t102-420x280.jpg"
                    alt=""
                  />
                  <div className="short_info">
                    <div className="box">
                      <p id="line">ENTERTAINMENT</p>
                    </div>
                    <p>Corsair HS80 RGB Wireless Gaming Headset Review</p>

                    <div className="down_side">
                      <div className="down_left">
                        <img
                          src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/emm-60x60.jpg"
                          alt=""
                        />
                        <p>Taylor Emma</p>
                        <span>Oct 1, 2021</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-6">
                {" "}
                <div className="img2">
                  <img
                    src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/t24-420x280.jpg"
                    alt=""
                  />
                  <div className="short_info">
                    <div className="box">
                      <p id="line">ENTERTAINMENT</p>
                    </div>
                    <p>
                      Apple VS Samsung– Can a Good Smartwatch Save Your Life?
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row middle">
          <p>-Sponsored-</p>

          <div className="col-lg-6 sponsor">
            <img src={image1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachnewsInfo;
