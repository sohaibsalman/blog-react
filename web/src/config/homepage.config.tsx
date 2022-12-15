import Picture from "../assets/picture.jpg";

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
        timestamp: "Current",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        heading: "Junior Software Engineer @ Bitsclan IT Solutions",
        timestamp: "2020 ~ 2021",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  },
};

export { config };
