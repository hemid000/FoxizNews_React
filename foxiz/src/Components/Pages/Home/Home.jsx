import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import HotNews from "./HotNews/HotNews";
import NewsInfo from "./NewsInfo/NewsInfo";
import NewsInfo2 from "./NewsInfo2/NewsInfo2";
import Editornews from "./Editor's Pick/Editornews";
import "react-toastify/dist/ReactToastify.css";
import MostRead from "./MostRead/MostRead";
import Discover from "./DiscoverCategories/Discover";
import Latest_news from "./Latest News/Latest_news";
import PoliticsInfo from "./PoliticsHome/PoliticsInfo";
import Fashion from "./Fashion/Fashion";
import HBlog from "./HomeBlog/HBlog";
const Home = () => {
  const notify = () => toast("Saved!");

  const [save, setSave] = useState(true);
  const [unsave, setUnsave] = useState(false);
  const [save2, setSave2] = useState(true);
  const [unsave2, setUnsave2] = useState(false);
  const [save3, setSave3] = useState(true);
  const [unsave3, setUnsave3] = useState(false);

  const handleClick = () => {
    setSave(false);
    setUnsave(true);
  };
  const handleClick2 = () => {
    setSave(true);
    setUnsave(false);
  };
  const handleClick3 = () => {
    setSave2(false);
    setUnsave2(true);
  };
  const handleClick4 = () => {
    setSave2(true);
    setUnsave2(false);
  };
  const handleClick5 = () => {
    setSave3(false);
    setUnsave3(true);
  };
  const handleClick6 = () => {
    setSave3(true);
    setUnsave3(false);
  };

  return (
    <main>
      <HotNews />
      <NewsInfo
        notify={notify}
        handleClick2={handleClick2}
        handleClick={handleClick}
        handleClick3={handleClick3}
        handleClick4={handleClick4}
        handleClick5={handleClick5}
        handleClick6={handleClick6}
        save={save}
        unsave={unsave}
        save2={save2}
        unsave2={unsave2}
        save3={save3}
        unsave3={unsave3}
      />
      <NewsInfo2 />
      <Editornews />
      <MostRead />
      <Discover />
      <Latest_news />
      <PoliticsInfo />
      <Fashion />
      <HBlog />
      <ToastContainer />
    </main>
  );
};

export default Home;
