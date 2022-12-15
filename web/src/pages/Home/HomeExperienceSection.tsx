import React from "react";

import { Heading } from "../../components/Typography";
import Timeline from "../../components/Timeline";

interface IProps {
  config: any;
}

const HomeExperienceSection: React.FC<IProps> = ({ config }) => {
  return (
    <React.Fragment>
      <section className="home-experience-section">
        <Heading variant="h2" className="mb-4">
          {config.sectionHeading}
        </Heading>
        <Timeline data={config.timeline} />
      </section>
    </React.Fragment>
  );
};

export default HomeExperienceSection;
