import React, { useState } from "react";
import "../HomeBlog/HBlog.scss";
import { BsBookmark, BsBookmarkFill, BsSun } from "react-icons/bs";
import { BlogHome } from "../../../Mock/HomeMock";

const HBlog = () => {
  const [visible, setVisible] = useState(10);

  const Countadd = () => {
    setVisible((add) => add + 10);
  };
  return (
    <section id="homeblog">
      <div className="container">
        <div className="row g-3 d-flex align-items-center">
          <p id="editor_p">From The Blog</p>

          {BlogHome &&
            BlogHome.slice(0, visible).map((el) => {
              return (
                <div key={el.id} className="col-lg-6">
                  <div className="right_side">
                    <div className="first">
                      <div className="img">
                        <div className="box">
                          <p id="line">{el.type}</p>
                        </div>
                        <img src={el.imgSrc2} alt="" />
                      </div>
                    </div>
                    <div className="second">
                      <p id="info">{el.info}</p>

                      <div className="down_side">
                        <div className="down_left">
                          <img src={el.imgSrc1} alt="" />
                          <p>{el.name}</p>
                          <span>{el.time}</span>
                        </div>

                        {/*                   
                          <div className="">
                            <BsBookmarkFill style={{ cursor: "pointer" }} />
                          </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          <div className="more">
            <button onClick={Countadd} id="more_in">
              Show More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HBlog;
