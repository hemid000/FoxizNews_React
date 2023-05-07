import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import { CustomTechMock } from "../../../Mock/CustomizeMock";
import "../Custom_Tech/CustomTech.scss";
const CustomTech = () => {
  return (
    <section id="customtech">
      <div className="upside">
        <div className="container">
          <h2>Technology</h2>
        </div>
      </div>
      <div className="container">
        <div className="row g-3">
          <div className="d-flex gap-4 flex-wrap">
            {CustomTechMock &&
              CustomTechMock.map((el) => {
                return (
                  <div key={el.id} className="cart">
                    <div className="img">
                      <img src={el.imgSrc} alt="" />
                    </div>
                    <div className="downside">
                      <div className="left_side">
                        <p>{el.kind}</p>
                      </div>
                      <div className="right_side">
                        <BsPlusCircle title="Follow" />
                      </div>
                    </div>
                  </div>
                );
              })}{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomTech;
