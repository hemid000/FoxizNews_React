import React, { useState } from "react";
import "../LatestTechNews/LatestTechNews.scss";
import { BsBookmark, BsFillReplyAllFill } from "react-icons/bs";
import { Sponsort_info } from "../../../Mock/HomeMock";
import { MdNotificationsNone, MdFavorite } from "react-icons/md";
import { AiOutlineRetweet } from "react-icons/ai";
import {
  PoliticsFollow,
  PoliticsFollow_envo,
} from "../../../Mock/PoliticsMock";
import { Tech_news_home } from "../../../Mock/TechMock";
import { AiFillCaretRight } from "react-icons/ai";
const LatestTechNews = () => {
  const [bgColor, setBgColor] = useState("#ff184e");
  const [bgColor2, setBgColor2] = useState("#fff");
  const [bgColor3, setBgColor3] = useState("#fff");
  const [color, setColor] = useState("#fff");
  const [color2, setColor2] = useState("#000");
  const [color3, setColor3] = useState("#000");
  const handleclick = () => {
    setColor("#fff") ||
      setColor2("#000") ||
      setColor3("#000") ||
      setBgColor("#ff184e") ||
      setBgColor3("#fff") ||
      setBgColor2("#fff");
  };
  const handleclick2 = () => {
    setColor("#000") ||
      setColor2("#fff") ||
      setColor3("#000") ||
      setBgColor("#fff") ||
      setBgColor3("#fff") ||
      setBgColor2("#ff184e");
  };
  const handleclick3 = () => {
    setColor("#000") ||
      setColor2("#000") ||
      setColor3("#fff") ||
      setBgColor("#fff") ||
      setBgColor3("#ff184e") ||
      setBgColor2("#fff");
  };

  return (
    <section id="latestTechNews">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <p id="editor_p">Technology News</p>
            <div className="large_section">
              <div className="row mt-5 d-flex ">
                {Tech_news_home &&
                  Tech_news_home.map((el) => {
                    return (
                      <div key={el.id} className="col-lg-6 col-md-6">
                        <div className="row align-items-center flex-column">
                          <div className="second">
                            <div className="img">
                              <div className="box">
                                <p id="line">{el.type}</p>
                              </div>
                              <img src={el.imgSrc2} alt="" />
                            </div>
                          </div>
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
                      </div>
                    );
                  })}
              </div>
            </div>

            <div className="container">
              <div className="box_next">
                <div
                  onClick={handleclick}
                  style={{ backgroundColor: bgColor, color: color }}
                  className="box1"
                >
                  1
                </div>
                <div
                  onClick={handleclick2}
                  style={{ backgroundColor: bgColor2, color: color2 }}
                  className="box2"
                >
                  2
                </div>
                <div
                  onClick={handleclick3}
                  style={{ backgroundColor: bgColor3, color: color3 }}
                  className="box3"
                >
                  <AiFillCaretRight />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="stick_right">
              <div className="follow">
                <div className="container mt-2">
                  <p id="editor_p">Stay Connected</p>
                  <div className="row g-2 mt-3">
                    {PoliticsFollow &&
                      PoliticsFollow.slice(0, 4).map((el) => {
                        return (
                          <div key={el.id} className="col-lg-6">
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
              <div className="learn">
                <div className="img">
                  <img
                    src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/ad-v.jpg"
                    alt=""
                  />
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
              {/* <div className="corono_news">
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
              </div> */}

              <div className="envato">
                <div className="upside">
                  <img
                    src="https://pbs.twimg.com/profile_images/1542611508093661184/MR5LYGqH_normal.jpg"
                    alt=""
                  />
                  <div className="follow_envo">
                    <p>@Envato</p>
                    <span>
                      <strong> 1.5k </strong>Following <strong> 70.9k</strong>{" "}
                      Followers
                    </span>
                  </div>
                </div>
                <div className="downside">
                  {PoliticsFollow_envo &&
                    PoliticsFollow_envo.map((el) => (
                      <div key={el.id} className="box">
                        <div className="box_up">
                          <img src={el.imgSrc} alt="" />
                          <span>{el.time}</span>
                        </div>
                        <div className="box_middle">
                          <p className="ellipsis">{el.shortinfo}</p>
                          <span>{el.link}</span>
                        </div>
                        <div className="box_down">
                          <BsFillReplyAllFill />
                          <AiOutlineRetweet />
                          <MdFavorite />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestTechNews;
