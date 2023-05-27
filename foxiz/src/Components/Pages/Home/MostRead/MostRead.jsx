import React, { useState } from "react";

import "../MostRead/MostRead.scss";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { HomeMockshort, Mostread } from "../../../Mock/HomeMock";
import { ToastContainer, toast } from "react-toastify";

const MostRead = () => {
  const notify = () => toast("Saved!");

  const [save, setSave] = useState(true);
  const [unsave, setUnsave] = useState(false);
  const [save2, setSave2] = useState(true);
  const [unsave2, setUnsave2] = useState(false);
  const [save3, setSave3] = useState(true);
  const [unsave3, setUnsave3] = useState(false);

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
  const handleClick5 = () => {
    setSave3(false);
    setUnsave3(true);
  };
  const handleClick6 = () => {
    setSave3(true);
    setUnsave3(false);
  };

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
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="row g-3">
              {Mostread &&
                Mostread.slice(0, 2).map((el) => {
                  return (
                    <div key={el.id} className="col-lg-6 col-md-6">
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
