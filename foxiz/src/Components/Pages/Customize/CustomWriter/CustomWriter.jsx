import React, { useState } from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import "../CustomWriter/CustomWriter.scss";
import { toast } from "react-toastify";

const CustomWriter = () => {
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
    <section id="customwriter">
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
                  {save && (
                    <div onClick={handleClick} className="">
                      <BsBookmark
                        onClick={notify}
                        style={{ cursor: "pointer", margin: "0 20px 0 0" }}
                      />
                    </div>
                  )}
                  {unsave && (
                    <div onClick={handleClick2} className="">
                      <BsBookmarkFill
                        style={{ cursor: "pointer", margin: "0 20px 0 0" }}
                      />
                    </div>
                  )}
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
    </section>
  );
};

export default CustomWriter;
