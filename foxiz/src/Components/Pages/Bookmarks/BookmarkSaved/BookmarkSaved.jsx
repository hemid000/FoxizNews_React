import React from "react";
import "../BookmarkSaved/BookmarkSaved.scss";
const BookmarkSaved = () => {
  return (
    <section id="bookmarksaved">
      <div className="upside">
        <div className="container">
          <h2>Reading List</h2>
          <p>you'll find all saved articles here.</p>
        </div>
      </div>
      <div className="downside">
        <div className="container">
          <p>You haven't saved anything yet.</p>
          <span>
            Start saving your interested articles by clicking the icon and
            you'll find them all here.
          </span>
        </div>
      </div>
    </section>
  );
};

export default BookmarkSaved;
