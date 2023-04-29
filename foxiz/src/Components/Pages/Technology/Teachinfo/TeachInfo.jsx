import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../Teachinfo/Teachinfo.scss";
const TeachInfo = () => {
  return (
    <section id="techinfo_tex">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 left_side">
            <div className="title">
              <span>
                <Link to={"/"}>
                  {" "}
                  News <AiOutlineRight />
                </Link>
              </span>
              <span>
                <Link to={"/blogIndex"}>
                  Blog <AiOutlineRight />
                </Link>
              </span>

              <span>
                <Link to={"/technology"}>Technology</Link>
              </span>
            </div>

            <h2>Technology</h2>
            <p>
              Modern technology has become a total phenomenon for civilization,
              the defining force of a new social order in which efficiency is no
              longer an option but a necessity imposed on all human activity.
            </p>
          </div>
          <div className="col-lg-4 right_side">
            <div className="img">
              <img
                id="front_img"
                src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/t39.jpg"
                alt=""
              />
              <img
                id="back_img"
                src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/t36.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachInfo;
