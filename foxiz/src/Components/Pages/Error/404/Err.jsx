import React from "react";
import "../404/Error.scss";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const Err = () => {
  return (
    <section id="error">
      <div className="container">
        <div className="img">
          <img
            src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/404.png"
            alt=""
          />
        </div>
        <div className="text_err">
          <h2>Something's wrong here...</h2>
          <p>
            It looks like nothing was found at this location. The page you were
            looking for does not exist or was loading incorrectly.
          </p>
        </div>
        <div className="search_err">
          <form action="">
            <div className="search-form-icon">
              <BsSearch />
            </div>
            <input
              id="text_input"
              type="text"
              placeholder="Search Headlines, News..."
            />
            <input
              id="submit_input"
              type="text"
              readOnly
              style={{ cursor: "pointer" }}
              placeholder="Search"
            />
          </form>{" "}
        </div>
        <div className="return_home">
          <Link to={"/"}>
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Err;
