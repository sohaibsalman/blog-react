import React from "react";

import HomeMainSection from "./HomeMainSection";

import { config } from "../../config/homepage.config";

const HomePage = () => {
  return (
    <React.Fragment>
      <HomeMainSection config={config.mainSection} />
    </React.Fragment>
  );
};

export default HomePage;
