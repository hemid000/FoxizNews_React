import React from "react";
import Reading from "./Reading_list/Reading";
import Cus_business from "./Customize_business/Cus_business";
import CustomWriter from "./CustomWriter/CustomWriter";
import CustomTech from "./Custom_Tech/CustomTech";
import CustomTravel from "./Custom_Travel/CustomTravel";

const Custom = () => {
  return (
    <div>
      <Reading />
      <Cus_business />
      <CustomWriter />
      <CustomTech />
      <CustomTravel />
    </div>
  );
};

export default Custom;
