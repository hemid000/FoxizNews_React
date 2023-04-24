import React, { useState } from "react";
import "../Navbar/Navbar.scss";
import { BiChevronDown, BiTrendingUp, BiChevronRight } from "react-icons/bi";
import {
  BsBookmark,
  BsClock,
  BsArrowRightCircle,
  BsSearch,
} from "react-icons/bs";
import { RiMore2Fill } from "react-icons/ri";
import { MdNotificationsNone } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import DarkMode from "../../DarkMode/DarkMode";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {
  Nav_More_list,
  Nav_bookmark_list,
  Nav_categories_list,
  Nav_home_list,
  NavbarMockTopNews,
} from "../../Mock/NavbarMock";
import { NavbarMock } from "../../Mock/NavbarMock";
import { NavbarMockNotnews } from "../../Mock/NavbarMock";
import { BiMenuAltLeft } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState(false);
  const [notification, setNotification] = useState(false);
  const [navclick, setNavclick] = useState();

  const handleclick = () => {
    setSearch(!search);
    setNotification(false);
  };
  const notification_click = () => {
    setNotification(!notification);
    setSearch(false);
  };
  return (
    <nav id="nav">
      <div className="nav_large">
        <div className="container mt-1">
          <div className="row g-3">
            <div className="col-2">
              <div className="nav_left">
                <Link to={"/"}>
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
                </Link>
              </div>
            </div>
            <div className="col-7">
              <div className="nav_middle">
                <ul>
                  <li id="home">
                    <Link to={"/"}>
                      Home <BiChevronDown className="down" />
                    </Link>
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
                    <Link to={"/politics"}>
                      Politics <BiChevronDown className="down" />
                    </Link>
                    <div className="politics_hover">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-4 left_side">
                            <Link to={"/politics"}>
                              <p>Politics</p>{" "}
                            </Link>
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
                              Politics is the art of looking for trouble,
                              finding it everywhere, diagnosing it incorrectly
                              and applying the wrong remedies.
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
                              {NavbarMock &&
                                NavbarMock.slice(0, 3).map((el) => {
                                  return (
                                    <div key={el.id} className="info_short">
                                      <img src={el.imgSrc} alt="" />
                                      <div className="info_right">
                                        <p>{el.shortinfo}</p>
                                        <span>{el.time}</span>
                                      </div>
                                    </div>
                                  );
                                })}
                            </div>
                          </div>
                          <div className="col-lg-4 right_side">
                            <p id="topics">
                              <BsClock style={{ color: "red" }} /> Latest News
                            </p>
                            <div className="info">
                              {NavbarMockTopNews &&
                                NavbarMockTopNews.slice(0, 3).map((el) => {
                                  return (
                                    <div key={el.id} className="info_right">
                                      <p>{el.shortinfo_latestnews}</p>
                                      <span>{el.time}</span>
                                    </div>
                                  );
                                })}
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
                              Sony WF-10XM4: Headphones Are Our Absolute
                              Favorite
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

                    <Link to={"/technology"}>
                      Technology <BiChevronDown className="down" />
                    </Link>
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
                    <Link to={"/posts"}>
                      Posts <BiChevronDown className="down" />
                    </Link>
                  </li>
                  <li id="bookmarks">
                    <Link to={"/bookmarks"}>
                      <BsBookmark /> Bookmarks
                    </Link>
                  </li>
                  <li id="pages">
                    <div className="pages_hover">
                      <ul>
                        <li>
                          <Link to={"/blogIndex"}>Blog Index</Link>{" "}
                        </li>
                        <li>
                          <Link to={"/contact"}> Contact Us</Link>
                        </li>
                        <li>
                          <Link to={"/search"}>Search Page</Link>{" "}
                        </li>
                        <li>
                          <Link to={"/*"}> 404 Page</Link>
                        </li>
                        <li>
                          <Link to={"/custom"}>Costumize Interests</Link>{" "}
                        </li>
                      </ul>
                    </div>
                    Pages <BiChevronDown className="down" />
                  </li>

                  <li id="more">
                    {search && (
                      <div className="more_hover">
                        <div className="container">
                          <p id="search_line ">Search</p>
                          <form action="">
                            <InputGroup className="mb-3">
                              <InputGroup.Text id="inputGroup-sizing-default">
                                <BsSearch />
                              </InputGroup.Text>
                              <Form.Control
                                placeholder="Search Headlines,News..."
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                              />
                            </InputGroup>
                          </form>
                        </div>
                        <div className="container mt-3 searching_items">
                          <div className="row g-3">
                            <div className="col-lg-4">
                              <ul>
                                <p>Technology</p>
                                <li>Innovate</li>
                                <li>Gadget</li>
                                <li>PC hardware</li>
                                <li>Review</li>
                                <li>Software</li>
                              </ul>
                            </div>
                            <div className="col-lg-4">
                              <ul>
                                <p>Health</p>
                                <li>Medicine</li>
                                <li>Children</li>
                                <li>Coronavirus</li>
                                <li>Nutrition</li>
                                <li>Disease</li>
                              </ul>
                            </div>
                            <div className="col-lg-4">
                              <ul>
                                <p>Entertainment</p>
                                <li>Stars</li>
                                <li>Screen</li>
                                <li>Culture</li>
                                <li>Media</li>
                                <li>Videos</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="container path">
                          <ul>
                            <li>Contact</li>
                            <li>Blog</li>
                            <li>Complaint</li>
                            <li>Advertise</li>
                          </ul>

                          <p>
                            © 2022 Foxiz News Network. Ruby Design Company. All
                            Rights Reserved.
                          </p>
                        </div>
                      </div>
                    )}

                    <RiMore2Fill
                      className="svg_more"
                      title="More"
                      onClick={handleclick}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-3">
              <div className="nav_right">
                <button id="sign_in">Sign in</button>
                <ul>
                  <li id="notification">
                    {notification && (
                      <div className="notification_click">
                        <div className="container">
                          <p id="note_line">Notification:</p>
                        </div>
                        <div className="container mt-3 searching_items">
                          <p id="topics">
                            <BsClock style={{ color: "red" }} /> Latest News
                          </p>
                          <div className="info">
                            {NavbarMockNotnews &&
                              NavbarMockNotnews.map((el) => {
                                return (
                                  <div key={el.id} className="info_short">
                                    <img src={el.imgSrc} alt="" />
                                    <div className="info_right">
                                      <p>{el.shortinfo_tech}</p>
                                      <span>{el.time}</span>
                                    </div>
                                  </div>
                                );
                              })}

                            <div
                              class="spinner-border text-danger"
                              role="status"
                            >
                              <span class="sr-only"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <MdNotificationsNone
                      title="Notification"
                      onClick={notification_click}
                    />
                  </li>

                  <li>
                    <FiSearch title="Search" onClick={handleclick} />
                  </li>
                  <li id="nav_dark">
                    <DarkMode />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nav_mobile">
        <div className="container">
          <div className="row">
            <div className="col-6 d-flex align-items-center left_side">
              <BiMenuAltLeft
                onClick={() => {
                  setNavclick(!navclick);
                }}
                style={{ fontSize: "29px", cursor: "pointer" }}
              />
              <Link to={"/"}>
                {" "}
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
              </Link>
            </div>
            <div className="col-6 d-flex align-items-center justify-content-end right_side">
              <ul>
                <li>
                  <FiSearch
                    onClick={() => {
                      setNavclick(!navclick);
                    }}
                    style={{ fontSize: "19px", margin: "0 5px 0 0" }}
                    title="Search"
                  />
                </li>
                <li id="nav_dark">
                  <DarkMode />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {navclick && (
        <div className="nav_click">
          <div className="list_mobile">
            <div className="container">
              <p id="line">Search</p>
              <form action="">
                <InputGroup className="mb-3">
                  <InputGroup.Text id="inputGroup-sizing-default">
                    <BsSearch />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Search Headlines,News..."
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </InputGroup>
              </form>
              <div className="row">
                <p>Home Pages</p>
                <div className="row">
                  <div className="col-6">
                    <ul>
                      <li>
                        <Link to={"/"}> Home 1</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul>
                      <li>Home 2</li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul>
                      <li>Home 3</li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul>
                      <li>Home 4</li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul>
                      <li>Home 5</li>
                    </ul>
                  </div>
                </div>

                <p>Categories</p>
                <div className="row">
                  <div className="col-6">
                    <ul>
                      <li>
                        <Link to={"/technology"}>Technology</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul>
                      <li>Entertainment</li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul>
                      <li>Travel</li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul>
                      <li>Fashion</li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul>
                      <li>Business</li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul>
                      <li>
                        {" "}
                        <Link to={"/politics"}>Politics</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul>
                      <li>Science</li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul>
                      <li>Health</li>
                    </ul>
                  </div>
                </div>
                <p>Bookmarks</p>
                <div className="row">
                  <div className="col-6">
                    <ul>
                      <li>
                        <Link to={"/custom"}>Customize Interests</Link>{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul>
                      <li>
                        <Link to={"/bookmarks"}>My Bookmarks</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <p>More Foxiz</p>
                <div className="row">
                  <div className="col-6">
                    <ul>
                      <li>
                        <Link to={"/blogIndex"}>Blog Index</Link>{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul>
                      <li>Sitemap</li>
                    </ul>
                  </div>
                </div>
                <p>
                  <Link to={"/contact"}>Contact Us</Link>
                </p>
                <p>
                  <Link to={"/search"}>Search</Link>
                </p>
              </div>
              <div className="register">
                <p>Have an existing account?</p>
                <button id="sign_in">Sign in</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
