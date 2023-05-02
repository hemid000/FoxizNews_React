import React, { useState } from "react";

import "../BookmarkWriter/BookmarkWriter.scss";
import { ToastContainer, toast } from "react-toastify";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

const BookmarkWriter = () => {
  const notify = () => toast("Saved!");
  const [save, setSave] = useState(true);
  const [unsave, setUnsave] = useState(false);
  const handleClick = () => {
    setSave(false);
    setUnsave(true);
  };
  const handleClick2 = () => {
    setSave(true);
    setUnsave(false);
  };
  return (
    <section id="bookmarkwriter">
      <div className="upside">
        <div className="container">
          <h2>Writers Followed</h2>
          <p>Follow writers that you're interested in</p>
        </div>
      </div>
      <div className="container">
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
                  src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/t12-860x574.jpg"
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

export default BookmarkWriter;
