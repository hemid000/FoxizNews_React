import React from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import "../NewsInfo2/NewsInfo2.scss";
import image1 from "../../../../Assets/sponser1.webp";
const NewsInfo2 = () => {
  return (
    <section id="NewsInfo2">
      <div className="container all">
        <div className="row">
          <div className="col-lg-6">
            <div className="left_side">
              <div className="first">
                <div className="box">
                  <p id="line">Technology</p>
                </div>
                <p id="info">
                  Apple Watch Series 9 Reportedly Has Flat Sides and Bigger
                  Screens
                </p>
                <div className="down_side">
                  <div className="down_left">
                    <img
                      src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/emm-60x60.jpg"
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
              <div className="second">
                <img
                  src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/t12-860x574.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            {" "}
            <div className="right_side">
              <div className="first">
                <div className="box">
                  <p id="line">Travel</p>
                </div>
                <p id="info">
                  REVIEW: San Diego City Beat’s a Night at The Besties
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
              <div className="second">
                <img
                  src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/v4.jpg"
                  alt=""
                />
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

export default NewsInfo2;
