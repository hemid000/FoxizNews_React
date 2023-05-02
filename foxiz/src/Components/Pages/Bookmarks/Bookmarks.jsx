import React from "react";
import BookmarkSaved from "./BookmarkSaved/BookmarkSaved";
import BookCategory from "./BookmarkCategory/BookCategory";
import BookmarkWriter from "./BookmarkWriter/BookmarkWriter";

const Bookmarks = () => {
  return (
    <div>
      <BookmarkSaved />
      <BookCategory />
      <BookmarkWriter />
    </div>
  );
};

export default Bookmarks;
