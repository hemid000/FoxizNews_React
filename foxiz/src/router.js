import React from "react";
import Home from "./Components/Pages/Home/Home";
import BlogIndex from "./Components/Pages/BlogIndex/BlogIndex";
import Bookmarks from "./Components/Pages/Bookmarks/Bookmarks";
import Contact from "./Components/Pages/Contact/Contact";
import Custom from "./Components/Pages/Customize/Custom";
import Error from "./Components/Pages/Error/Error";
import Politics from "./Components/Pages/Politics/Politics";
import Search from "./Components/Pages/SearchPage/Search";
import Technology from "./Components/Pages/Technology/Technology";

const Router = [
  {
    id: 1,
    path: "/",
    exact: "true",
    component: <Home />,
    fallback: <Home />,
  },

  {
    path: "/blogIndex",
    exact: "true",
    component: <BlogIndex />,
  },
  {
    path: "/bookmarks",
    exact: "true",
    component: <Bookmarks />,
  },
  {
    path: "/contact",
    exact: "true",
    component: <Contact />,
  },
  {
    path: "/custom",
    exact: "true",
    component: <Custom />,
  },
  {
    path: "/*",
    exact: "true",
    component: <Error />,
  },
  {
    path: "/politics",
    exact: "true",
    component: <Politics />,
  },
  {
    path: "/search",
    exact: "true",
    component: <Search />,
  },
  {
    path: "/technology",
    exact: "true",
    component: <Technology />,
  },
];

export default Router;
