import React from "react";
import "../BookmarkRecommended/BRecommend.scss";
import { Book_news } from "../../../Mock/BookmarkMock";

const BRecommend = () => {
  return (
    <section id="brecommend">
      <div className="container">
        <div className="row mt-5 d-flex ">
          <p id="editor_p">Recommended for You</p>

          {Book_news &&
            Book_news.map((el) => {
              return (
                <div key={el.id} className="col-lg-4 col-md-6 ">
                  <div className="row align-items-center flex-column">
                    <div className="second">
                      <div className="img">
                        <div className="box">
                          <p id="line">{el.type}</p>
                        </div>
                        <img src={el.imgSrc2} alt="" />
                      </div>
                    </div>
                    <div className="right_side">
                      <div className="first">
                        <p id="info">{el.info}</p>
                        <span id="infospan">{el.infospan}</span>
                        <div className="down_side">
                          <div className="down_left">
                            <img src={el.imgSrc1} alt="" />
                            <p>{el.name}</p>
                            <span>{el.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default BRecommend;
