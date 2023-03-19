import React from "react";
import "../Navbar/Navbar.scss";
import { BiChevronDown } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
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
                <li>
                  Home <BiChevronDown className="down" />
                </li>
                <li>
                  Politics <BiChevronDown className="down" />
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
