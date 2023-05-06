import React from "react";
import "../ConReview/ConReview.scss";
import { PoliticsFollow } from "../../../Mock/PoliticsMock";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { BsPhone, BsTelephone } from "react-icons/bs";
const ConReview = () => {
  return (
    <section id="contact_review">
      <div className="container">
        <div className="row g-3">
          <div className="col-lg-8">
            <p>General Customer Care & Technical Support</p>
            <span>
              As we address the needs of our customers, email wait times may be
              longer than usual. In an effort to give you the best customer
              experience possible, we encourage you to take advantage of our
              phones. In most cases this is the fastest and easiest option.
            </span>
            <div className="container before_line">
              <div className="row g-3">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <label htmlFor="">Name (required)</label>
                  <input type="text" id="text" placeholder="Name" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <label htmlFor="">Email (required)</label>
                  <input type="text" id="text" placeholder="Email" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <label htmlFor="">Phone Number (required)</label>
                  <input type="text" id="text" placeholder="Number" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <label htmlFor="">Website (optional)</label>
                  <input type="text" id="text" placeholder="Website" />
                </div>
              </div>
            </div>
            <div className="container g-0">
              <div className="row">
                <div className="col-lg-12">
                  <label htmlFor="">Message</label>
                  <textarea
                    name=""
                    id="details"
                    cols="30"
                    rows="8"
                    placeholder="Message..."
                  ></textarea>
                  <div className="box">
                    <input type="checkbox" id="scales" name="scales" required />
                    <label id="agreesign">
                      I’m okay with getting emails and having that activity
                      tracked to improve my experience.
                    </label>
                  </div>
                  <button id="sign_in">Leave Message</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="stick_right">
              <div className="follow">
                <div className="container mt-2">
                  <p id="editor_p">Stay Connected</p>
                  <div className="row g-2 mt-3">
                    {PoliticsFollow &&
                      PoliticsFollow.slice(0, 4).map((el) => {
                        return (
                          <div key={el.id} className="col-lg-6">
                            <div className="cart">
                              {el.logo}
                              <div className="box">
                                <p>{el.follow_info}</p>
                                <span>{el.like}</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
              <div className="address">
                <ul>
                  <p>Office Address</p>
                  <li>
                    <CiLocationOn />
                    The Business Centre 132, My Street Kingston, New York 12401
                    United States
                  </li>
                </ul>
                <ul id="info">
                  <p>Call Information</p>
                  <li>
                    <BsPhone />
                    <strong>Phone: </strong>
                    (+1) 234 567 89
                  </li>
                  <li>
                    <BsTelephone />
                    <strong>Tel: </strong>
                    +1-541-234-3010
                  </li>
                  <li>
                    <CiMail />
                    <strong>Email: </strong>
                    themeruby@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConReview;
