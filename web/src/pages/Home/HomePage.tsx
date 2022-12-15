import React from "react";

import HomeMainSection from "./HomeMainSection";
import HomeExperienceSection from "./HomeExperienceSection";

import { config } from "../../config/homepage.config";

const HomePage = () => {
  return (
    <React.Fragment>
      <HomeMainSection config={config.mainSection} />
      <HomeExperienceSection config={config.experienceSection} />
    </React.Fragment>
  );
};

export default HomePage;
