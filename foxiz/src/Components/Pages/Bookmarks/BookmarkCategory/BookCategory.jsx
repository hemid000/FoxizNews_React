import React from "react";
import "../BookmarkCategory/BookCategory.scss";
import { BookmarkCatgeory } from "../../../Mock/BookmarkMock";
import { BsPlusCircle } from "react-icons/bs";

const BookCategory = () => {
  return (
    <section id="bookcategory">
      <div className="upside">
        <div className="container">
          <h2>Your Categories</h2>
          <p>Follow categories that you're interested in</p>
        </div>
      </div>
      <div className="container">
        <div className="row g-3">
          {BookmarkCatgeory &&
            BookmarkCatgeory.slice(0, 4).map((el) => {
              return (
                <div key={el.id} className="col-lg-3 col-md-6 col-sm-12">
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
      </div>
    </section>
  );
};

export default BookCategory;
