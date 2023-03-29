import React from "react";
import "../DiscoverCategories/Discover.scss";
import { BsPlusCircle } from "react-icons/bs";
import { Discover_Categories } from "../../../Mock/HomeMock";

const Discover = () => {
  return (
    <section id="discover">
      <div className="container">
        <p id="editor_p">Discover Categories</p>

        <div className="row">
          {Discover_Categories &&
            Discover_Categories.slice(0, 4).map((el) => {
              return (
                <div key={el.id} className="col-lg-3">
                  <div className="cart">
                    <div className="img">
                      <img src={el.imgSrc} alt="" />
                    </div>
                    <div className="downside">
                      <div className="left_side">
                        <p>{el.kind}</p>
                        <span>{el.info}</span>
                      </div>
                      <div className="right_side">
                        <BsPlusCircle title="Follow" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <span id="info_cart_type">Discover More of What Matters to You:</span>
        <span id="types">Politicals Science Life Style Videos</span>
      </div>
    </section>
  );
};

export default Discover;
