import { config as stylesConfig } from "./styles.config";

const config = {
  backgroundColor: stylesConfig.colorPrimary,
  fontColor: stylesConfig.colorFontPrimary,
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
  toggleButton: () => {
    return (
      <div className="hamburger">
        <span
          className="bar"
          style={{ backgroundColor: stylesConfig.colorFontPrimary }}
        ></span>
        <span
          className="bar"
          style={{ backgroundColor: stylesConfig.colorFontPrimary }}
        ></span>
        <span
          className="bar"
          style={{ backgroundColor: stylesConfig.colorFontPrimary }}
        ></span>
      </div>
    );
  },
};

export { config };
