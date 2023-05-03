import React from "react";
import BookmarkSaved from "./BookmarkSaved/BookmarkSaved";
import BookCategory from "./BookmarkCategory/BookCategory";
import BookmarkWriter from "./BookmarkWriter/BookmarkWriter";
import BRecommend from "./BookmarkRecommended/BRecommend";

const Bookmarks = () => {
  return (
    <div>
      <BookmarkSaved />
      <BookCategory />
      <BookmarkWriter />
      <BRecommend />
    </div>
  );
};

export default Bookmarks;
