import React from "react";
import "../Navbar/Navbar.scss";
import { BiChevronDown, BiTrendingUp } from "react-icons/bi";
import { BsBookmark, BsClock } from "react-icons/bs";
import { RiMore2Fill } from "react-icons/ri";
import { MdNotificationsNone } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import DarkMode from "../../DarkMode/DarkMode";
const Navbar = () => {
  return (
    <nav id="nav">
      <div className="container mt-1">
        <div className="row">
          <div className="col-lg-2 ">
            <div className="nav_left">
              <div className="img">
                <img
                  id="lightmode_img"
                  src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/12/logo.svg"
                  alt=""
                  title="News"
                />
                <img
                  id="darkmode_img"
                  src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/12/logo-light.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="nav_middle">
              <ul>
                <li id="home">
                  Home <BiChevronDown className="down" />
                  <div className="home_hover">
                    <ul>
                      <li>
                        Home 2<div className="add_info">Hot</div>
                      </li>
                      <li>Home 3</li>
                      <li>
                        Home 4<div className="add_info2">New</div>
                      </li>
                      <li>Home 5</li>
                    </ul>
                  </div>
                </li>
                <li id="politics">
                  Politics <BiChevronDown className="down" />
                  <div className="politics_hover">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-4 left_side">
                          <p>Politics</p>
                          <div className="img">
                            <img
                              id="front_img"
                              src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/b36-860x573.jpg"
                              alt=""
                            />
                            <img
                              id="back_img"
                              src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/p12-860x573.jpg"
                              alt=""
                            />
                          </div>

                          <span>
                            Politics is the art of looking for trouble, finding
                            it everywhere, diagnosing it incorrectly and
                            applying the wrong remedies.
                          </span>
                          <div className="show">
                            <button id="btn_SHOW">Show more</button>
                          </div>
                        </div>
                        <div className="col-lg-4 middle_side">
                          <p id="topics">
                            <BiTrendingUp style={{ color: "red" }} /> Top News
                          </p>

                          <div className="info">
                            <div className="info_short">
                              <img
                                src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/p50-150x150.jpg"
                                alt=""
                              />
                              <div className="info_right">
                                <p>
                                  White House Reminds Lawmakers not to Travel to
                                  Afghanistan
                                </p>
                                <span>Sep 24, 2021</span>
                              </div>
                            </div>
                            <div className="info_short">
                              <img
                                src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/p54-150x150.jpg"
                                alt=""
                              />
                              <div className="info_right">
                                <p>
                                  Two Anti-Lockdown Leaders Arrested as Protests
                                  Held Across Valinor
                                </p>
                                <span>Sep 24, 2021</span>
                              </div>
                            </div>
                            <div className="info_short">
                              <img
                                src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/b36-150x150.jpg"
                                alt=""
                              />
                              <div className="info_right">
                                <p>
                                  National Day Rally 2023: Sacrifice, Effort
                                  Needed to Preserve Harmony
                                </p>
                                <span>Oct 5, 2021</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 right_side">
                          <p id="topics">
                            <BsClock style={{ color: "red" }} /> Latest News
                          </p>
                          <div className="info">
                            <div className="info_right">
                              <p>
                                Bad Credit Shouldn’t Affect Health Insurance,
                                Experts Say
                              </p>
                              <span>Nov 2, 2021</span>
                            </div>

                            <div className="info_right">
                              <p>
                                What Is Women’s Equality Day and Why Is It
                                Celebrated?
                              </p>
                              <span>Sep 24, 2021</span>
                            </div>

                            <div className="info_right">
                              <p>
                                New Census Data Will Shake Up Alabama Politics
                              </p>
                              <span>Sep 25, 2021</span>
                            </div>
                            <div className="info_right">
                              <p>
                                The States Braces for Protests Over New COVID
                                Rules
                              </p>
                              <span>Nov 3, 2021</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  Technology <BiChevronDown className="down" />
                </li>
                <li>
                  Posts <BiChevronDown className="down" />
                </li>
                <li>
                  <BsBookmark /> Bookmarks
                </li>
                <li>
                  Pages <BiChevronDown className="down" />
                </li>
                <li>
                  <RiMore2Fill className="svg_more" title="More" />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 ">
            <div className="nav_right">
              <button id="sign_in">Sign in</button>
              <ul>
                <li>
                  <MdNotificationsNone title="Notification" />
                </li>
                <li>
                  <FiSearch title="Search" />
                </li>
                <li id="nav_dark">
                  <DarkMode />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
