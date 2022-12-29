import * as SimpleIcons from "react-icons/si";

import ToggleButton from "../components/ToggleButton/ToggleButton";

const config = {
  brand: {
    name: "Sohaib Salman",
    render: () => {
      return (
        <div>
          <span>dev</span>Sohaib
        </div>
      );
    },
  },
  links: [
    {
      label: "Home",
      route: "/",
    },
    {
      label: "Projects",
      route: "/projects",
    },
    {
      label: "Blogs",
      route: "/blogs",
    },
    {
      label: "Contact",
      route: "/contact",
    },
  ],
  socialLinks: [
    {
      label: "GitHub",
      icon: <SimpleIcons.SiGithub />,
      route: "https://github.com/sohaibsalman",
    },
    {
      label: "LinkedIn",
      icon: <SimpleIcons.SiLinkedin />,
      route: "https://www.linkedin.com/in/sohaibsalman/",
    },
  ],
  toggleButton: () => <ToggleButton />,
};

export { config };
