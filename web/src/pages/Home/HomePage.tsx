import React from "react";

import HomeMainSection from "./HomeMainSection";
import HomeSkillsSection from "./HomeSkillsSection";
import HomeExperienceSection from "./HomeExperienceSection";

import { config } from "../../config/homepage.config";

const HomePage = () => {
  return (
    <React.Fragment>
      <HomeMainSection config={config.mainSection} />
      <HomeExperienceSection config={config.experienceSection} />
      <HomeSkillsSection config={config.skillsSection} />
    </React.Fragment>
  );
};

export default HomePage;
