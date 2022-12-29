import * as SimpleIcons from "react-icons/si";

const config = {
  credits:
    "This blog portfolio is designed and developed by Sohaib Salman using React JS",
  socialLinks: [
    {
      icon: <SimpleIcons.SiGithub />,
      label: "Github",
      route: "https://github.com/sohaibsalman",
    },
    {
      icon: <SimpleIcons.SiLinkedin />,
      label: "Linkedin",
      route: "https://www.linkedin.com/in/sohaibsalman/",
    },
    {
      icon: <SimpleIcons.SiSkype />,
      label: "Skype",
      route: "https://join.skype.com/invite/rjpffvUldsGk",
    },
    {
      icon: <SimpleIcons.SiFacebook />,
      label: "Facebook",
      route: "https://www.facebook.com/S0haibSalman",
    },
    {
      icon: <SimpleIcons.SiInstagram />,
      label: "Instagram",
      route: "https://www.instagram.com/sohaib.salman/",
    },
  ],
};

export { config };
