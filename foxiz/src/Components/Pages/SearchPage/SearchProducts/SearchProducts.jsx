import "../SearchProducts/SearchProducts.scss";
import { BsSearch } from "react-icons/bs";
import React, { useState } from "react";
import { SearchMock } from "../../../Mock/SearchMock";
const SearchProducts = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  const filter = (e) => {
    setSearch(e.target.value);
  };

  return (
    <section id="search">
      <div
        className="backImg"
        style={{
          backgroundImage:
            "url('https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/search-bg.jpg')",
        }}
      >
        <div className="container">
          <div className="row search_row">
            <h2>Search Results:</h2>
            <p>Showing results for your search</p>
            <div className="box_search">
              <form action="">
                <div className="search-form-icon">
                  <BsSearch />
                </div>
                <input
                  onChange={filter}
                  id="text_input"
                  type="text"
                  placeholder="Search Headlines, News..."
                />
                <input
                  id="submit_input"
                  type="text"
                  readOnly
                  style={{ cursor: "pointer" }}
                  placeholder="Search"
                />
              </form>{" "}
            </div>
          </div>
        </div>
      </div>
      <div
        className="backImgDark"
        style={{
          backgroundImage:
            "url('https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/search-bgd.jpg')",
        }}
      >
        <div className="container">
          <div className="row search_row">
            <h2>Search Results:</h2>
            <p>Showing results for your search</p>
            <div className="box_search">
              <form action="">
                <div className="search-form-icon">
                  <BsSearch />
                </div>
                <input
                  onChange={filter}
                  id="text_input"
                  type="text"
                  placeholder="Search Headlines, News..."
                />
                <input
                  id="submit_input"
                  type="text"
                  readOnly
                  style={{ cursor: "pointer" }}
                  placeholder="Search"
                />
              </form>{" "}
            </div>
          </div>
        </div>
      </div>
      <div id="products_se">
        <div className="container mt-4">
          <div className="row g-3">
            {SearchMock &&
              // filter((el) => {
              //     return search.toLocaleLowerCase() === ""
              //       ? el
              //       : el.tag.toLocaleLowerCase().includes(search);
              //   })
              SearchMock.filter((product) =>
                product.tag.toLowerCase().includes(search.toLowerCase())
              ).map((el) => {
                return (
                  <div key={el.id} className="col-lg-3 col-md-6 col-sm-12">
                    <div className="cart">
                      <div className="img">
                        <div className="box">
                          <p id="line">{el.tag}</p>
                        </div>
                        <img src={el.imgSrc} alt="" />
                      </div>
                      <p id="info">{el.shortinfo}</p>
                      <div className="down_side">
                        <div className="down_left">
                          <span>{el.time}</span>
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchProducts;
