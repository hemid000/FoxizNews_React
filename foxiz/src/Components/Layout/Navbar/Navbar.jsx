import React from "react";
import "../Navbar/Navbar.scss";
import { BiChevronDown, BiTrendingUp, BiChevronRight } from "react-icons/bi";
import { BsBookmark, BsClock, BsArrowRightCircle } from "react-icons/bs";
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
                <li id="tech">
                  <div className="tech_hover">
                    <div className="container">
                      <div className="article">
                        <p>Technology</p>
                        <span>
                          Show More <BsArrowRightCircle />
                        </span>
                      </div>
                    </div>

                    <div className="container mt-3">
                      <div className="info_short">
                        <div className="info">
                          <img
                            src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/t54-1-330x220.jpg"
                            alt=""
                          />
                          <p>
                            How My Phone’s Most Annoying Feature Saved My Life
                          </p>
                          <span>Oct 1, 2021</span>
                        </div>
                        <div className="info">
                          <img
                            src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/t12-330x220.jpg"
                            alt=""
                          />
                          <p>
                            Apple Watch Series 9 Reportedly Has Flat Sides and
                            Bigger Screens
                          </p>
                          <span>Sep 19, 2021</span>
                        </div>
                        <div className="info">
                          <img
                            src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/r119-330x220.jpg"
                            alt=""
                          />
                          <p>
                            Apple iMac M1 Review: the All-In-One for Almost
                            Everyone
                          </p>
                          <div className="color">
                            <div className="col1"></div>
                            <div className="col2"></div>
                            <div className="col3"></div>
                            <div className="col4"></div>
                            <div className="col5"></div>
                          </div>
                        </div>
                        <div className="info">
                          <img
                            src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/t34-330x220.jpg"
                            alt=""
                          />
                          <p>
                            Google’s Self-Designed Tensor Chips will Power Its
                            Next
                          </p>
                          <span>Sep 8, 2021</span>
                        </div>
                        <div className="info">
                          <img
                            src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/t37-330x220.jpg"
                            alt=""
                          />
                          <p>
                            Sony WF-10XM4: Headphones Are Our Absolute Favorite
                          </p>
                          <div className="add_info">
                            <MdNotificationsNone /> <p>Sponsored by</p>
                            <img
                              src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/sponsor-1.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  Technology <BiChevronDown className="down" />
                </li>
                <li id="post">
                  <div className="post_hover">
                    <ul>
                      <li id="post_add">
                        Post Layouts
                        <div className="post_add_hover">
                          <ul>
                            <li>Standard 1</li>
                            <li>Standard 2</li>
                            <li>Standard 3</li>
                            <li>Standard 4</li>
                            <li>Standard 5</li>
                            <li>Standard 6</li>
                            <li>Standard 7</li>
                            <li>Standard 8</li>
                            <li>No Featured</li>
                          </ul>
                        </div>
                        <BiChevronRight style={{ fontSize: "16px" }} />
                      </li>
                      <li id="layout_add">
                        <div className="layout_add_hover">
                          <ul>
                            <li>Layout 1</li>
                            <li>Layout 2</li>
                            <li>Layout 3</li>
                          </ul>
                        </div>
                        Gallery Layouts{" "}
                        <BiChevronRight style={{ fontSize: "16px" }} />
                      </li>
                      <li id="layout_add">
                        <div className="layout_add_hover">
                          <ul>
                            <li>Layout 1</li>
                            <li>Layout 2</li>
                            <li>Layout 3</li>
                            <li>Layout 4</li>
                          </ul>
                        </div>
                        Video Layouts{" "}
                        <BiChevronRight style={{ fontSize: "16px" }} />
                      </li>
                      <li id="layout_add">
                        <div className="layout_add_hover">
                          <ul>
                            <li>Layout 1</li>
                            <li>Layout 2</li>
                            <li>Layout 3</li>
                            <li>Layout 4</li>
                          </ul>
                        </div>
                        Audio Layouts{" "}
                        <BiChevronRight style={{ fontSize: "16px" }} />
                      </li>
                      <li id="post_add">
                        <div className="post_add_hover">
                          <ul>
                            <li>Right Sidebar</li>
                            <li>left Sidebar</li>
                            <li>No Sidebar</li>
                          </ul>
                        </div>
                        Post Sidebar{" "}
                        <BiChevronRight style={{ fontSize: "16px" }} />
                      </li>
                      <li id="review_add">
                        <div className="review_add_hover">
                          <ul>
                            <li>Stars</li>
                            <li>lScores</li>
                            <li>User Rating</li>
                          </ul>
                        </div>
                        Review <div className="add_info">Hot</div>{" "}
                        <BiChevronRight style={{ fontSize: "16px" }} />
                      </li>
                      <li id="content_add">
                        <div className="content_add_hover">
                          <ul>
                            <li>Inline Mailchimp</li>
                            <li>Highlight Shares</li>
                            <li>Print Post</li>
                            <li>Inline Related</li>
                            <li>Source/Via Tag</li>
                            <li>Reading Indicator</li>
                            <li>Content Size Resizer</li>
                          </ul>
                        </div>
                        Content Features <div className="add_info2">100+</div>{" "}
                        <BiChevronRight style={{ fontSize: "16px" }} />
                      </li>
                      <li>
                        Multiple Authors <div className="add_info3">New</div>
                      </li>
                      <li>
                        Break Page Selection{" "}
                        <div className="add_info4">Hot</div>
                      </li>
                      <li id="table_con_add">
                        <div className="table_con_add_hover">
                          <ul>
                            <li>Full Width</li>
                            <li>Left Side</li>
                          </ul>
                        </div>
                        Table of Contents{" "}
                        <BiChevronRight style={{ fontSize: "16px" }} />
                      </li>
                      <li>
                        Auto Load Next Posts{" "}
                        <div className="add_info5">Hot</div>
                      </li>
                      <li>Reaction Post</li>
                      <li>Sponsored Post</li>
                      <li>Highlights/ Key Points</li>
                    </ul>
                  </div>
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
