import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import "../Customize_business/Cus_business.scss";
import { CustomBusiness } from "../../../Mock/CustomizeMock";
const Cus_business = () => {
  return (
    <section id="custom_business">
      <div className="upside">
        <div className="container">
          <h2>Your Categories</h2>
        </div>
      </div>
      <div className="container">
        <div className="row g-3">
          <div className="d-flex gap-4 flex-wrap">
            {CustomBusiness &&
              CustomBusiness.map((el) => {
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

export default Cus_business;
