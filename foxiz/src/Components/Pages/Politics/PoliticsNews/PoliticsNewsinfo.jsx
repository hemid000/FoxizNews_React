import React, { useState } from "react";
import { toast } from "react-toastify";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import image1 from "../../../../Assets/sponser1.webp";
import "../PoliticsNews/PoliticsNewsinfo.scss";
import { PoliticsMock } from "../../../Mock/PoliticsMock";
const PoliticsNewsinfo = () => {
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
    <section id="politicsNewsinfo">
      <div className="container">
        <div className="row g-3 mb-3">
          <p id="editor_p">Top Politics News</p>
          <div className="col-lg-6">
            <div className="img">
              <img
                src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/p50-860x573.jpg"
                alt=""
              />
              <div className="short_info">
                <p>
                  White House Reminds Lawmakers not to Travel to Afghanistan
                </p>

                <span>
                  Good web design has visual weight, is optimized for various
                  devices, and…
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
          <div className="col-lg-6">
            <div className="img">
              <img
                src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/p54-860x573.jpg"
                alt=""
              />
              <div className="short_info">
                <p>
                  Two Anti-Lockdown Leaders Arrested as Protests Held Across
                  Valinor
                </p>

                <span>
                  Good web design has visual weight, is optimized for various
                  devices, and…
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
        </div>
        <div className="row g-3">
          {PoliticsMock &&
            PoliticsMock.map((el) => (
              <div key={el.id} className="col-lg-4">
                <div className="img2">
                  <img src={el.imgSrc} alt="" />
                  <div className="short_info">
                    <p>{el.shortinfo}</p>
                    <div className="down_side">
                      <div className="down_left">
                        <img src={el.downImg} alt="" />
                        <p>{el.by}</p>
                        <span id="time_sp">{el.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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

export default PoliticsNewsinfo;
