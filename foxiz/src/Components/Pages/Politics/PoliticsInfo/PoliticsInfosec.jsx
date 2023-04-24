import React from "react";
import "../PoliticsInfo/PoliticsInfosec.scss";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const PoliticsInfosec = () => {
  return (
    <section id="politicsinfosec">
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
                <Link to={"/politics"}>Politics</Link>
              </span>
            </div>

            <h2>Politics</h2>
            <p>
              Politics is the art of looking for trouble, finding it everywhere,
              diagnosing it incorrectly and applying the wrong remedies.
            </p>
          </div>
          <div className="col-lg-4 right_side">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoliticsInfosec;
