import React from "react";
import { Heading, Text } from "../../components/Typography";
import useThemeContext from "../../hooks/use-theme-context";

interface IProps {
  config: any;
}

const HomeSkillsSection: React.FC<IProps> = ({ config }) => {
  const theme = useThemeContext();

  const renderedSkills = config.skills.map((skill: any) => {
    const renderedIcons = skill.icons.map((icon: any) => (
      <span className="skill-icon" style={{ color: theme.fontColorPrimary }}>
        {icon}
      </span>
    ));

    return (
      <div className="col-md-6 col-sm-12 mb-4">
        <div
          className="skill-container text-center"
          style={{ backgroundColor: theme.colorPrimary }}
        >
          <div className="skill-title">
            <Heading variant="h5">{skill.title}</Heading>
          </div>
          <div className="skill-icons mt-2">{renderedIcons}</div>
        </div>
      </div>
    );
  });

  return (
    <section className="home-skills-section">
      <div className="skills-heading">
        <Heading variant="h2"> {config.sectionHeading}</Heading>
      </div>
      {config.sectionDetails && (
        <div className="skill-details mt-4">
          <Text>{config.sectionDetails}</Text>
        </div>
      )}
      <div className="skills-container row mt-4">{renderedSkills}</div>
    </section>
  );
};

export default HomeSkillsSection;
