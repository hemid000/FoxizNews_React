import React from "react";
import "../Footer/Footer.scss";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="foot">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 left_side">
            <p>
              We influence 20 million users and is the number one business and
              technology news network on the planet
            </p>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-6">
                <ul>
                  <p>Quick Link</p>
                  <li>
                    <Link to={"/bookmarks"}>MY BOOKMARK</Link>
                  </li>
                  <li>
                    <Link to={"/custom"}> INTERESTS</Link>
                    <div className="add_info">New</div>
                  </li>
                  <li>
                    <Link to={"/contact"}>CONTACT US</Link>
                  </li>
                  <li>
                    <Link to={"/blogIndex"}>BLOG INDEX</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 col-6">
                <ul>
                  <p>Top Categories</p>
                  <li>BUSINESS</li>
                  <li>POLITICS</li>
                  <li>
                    TECH <div className="add_info2">Hot</div>
                  </li>
                  <li>HEALTH</li>
                </ul>
              </div>
              <div className="col-lg-4 right_side">
                <p>Sign Up for Our Newsletter</p>
                <span>
                  Subscribe to our newsletter to get our newest articles
                  instantly!
                </span>
                <form action="">
                  <input
                    type="text"
                    placeholder="Email address"
                    id="inp_sign"
                    required
                  />
                  <button type="submit">Sign up</button>
                  <input type="checkbox" id="scales" name="scales" required />
                  <label>
                    I’m okay with getting emails and having that activity
                    tracked to improve my experience.
                  </label>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container follow">
          <img
            src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/footer-s-logo.png"
            alt=""
          />

          <div className="box">
            <p>Follow US</p>
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>
        <div className="container downfoot">
          <p>
            © 2022 Foxiz News Network. Ruby Design Company. All Rights Reserved.
          </p>
          <div className="box">
            <span>Contact</span>
            <span>Blog</span>
            <span>Complaint</span>
            <span>Advertise</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
