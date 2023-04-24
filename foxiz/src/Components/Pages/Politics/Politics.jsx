import React from "react";
import PoliticsInfosec from "./PoliticsInfo/PoliticsInfosec";
import PoliticsNewsinfo from "./PoliticsNews/PoliticsNewsinfo";
import PoliticsLatestNews from "./PoliticsLatestNews/PoliticsLatestNews";

const Politics = () => {
  return (
    <div>
      <PoliticsInfosec />
      <PoliticsNewsinfo />
      <PoliticsLatestNews />
    </div>
  );
};

export default Politics;
