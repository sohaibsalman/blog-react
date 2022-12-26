import Picture from "../assets/picture.jpg";
import { DevIcons } from "../components/Icons";

const config = {
  mainSection: {
    greetings: "Hi, I'm",
    name: "Sohaib Salman.",
    designation: "Software Engineer from Pakistan.",
    bio: `A passionate and Software Engineer and a self-learner, who loves to
    provide and implement elegant software solutions to complex
    problems. Currently, I am focused on Full-Stack Web development by
    using latest cutting edge technologies!`,
    image: {
      url: Picture,
      alt: "Sohaib Salman",
    },
  },
  experienceSection: {
    sectionHeading: "Work Experience",
    sectionDetails: null,
    timeline: [
      {
        heading: "Software Engineer @ Rolustech",
        timestamp: "July 2021 ~ Current",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        heading: "Junior Software Engineer @ Bitsclan IT Solutions",
        timestamp: "Dec 2020 ~ June 2021",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  },
  skillsSection: {
    sectionHeading: "Things I code with",
    sectionDetails: `I love to develop things that run over the internet. I am in a quest of keeping myself up to date according to the new technologies
    and platforms, and for that I love to read tech articles, do certifications and get my hands dirty by working on simple ideas of my
    own. Here are some technologies that I love!`,
    skills: [
      {
        title: "React JS and Angular",
        icons: [DevIcons.react, DevIcons.angular],
      },
      {
        title: "ASP.NET, Node JS, Nest JS",
        icons: [DevIcons.dotnet, DevIcons.nodejs, DevIcons.nestjs],
      },
      {
        title: "C#, JavaScript, Typescript, PHP",
        icons: [DevIcons.cSharp, DevIcons.js, DevIcons.ts, DevIcons.php],
      },
      {
        title: "HTML, CSS, Bootstrap, jQuery",
        icons: [
          DevIcons.html,
          DevIcons.css,
          DevIcons.bootstrap,
          DevIcons.jquery,
        ],
      },
      {
        title: "MySQL, PostgreSQL, MongoDB",
        icons: [DevIcons.mysql, DevIcons.postgreSql, DevIcons.mongodb],
      },
      {
        title: "React Native and Android",
        icons: [DevIcons.react, DevIcons.android],
      },
      {
        title: "Git, GitHub, GitLab",
        icons: [DevIcons.git, DevIcons.github, DevIcons.gitlab],
      },
      {
        title: "Docker and Kubernetes",
        icons: [DevIcons.docker, DevIcons.kubernetes],
      },
    ],
  },
};

export { config };
