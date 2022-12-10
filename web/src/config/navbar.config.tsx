const config = {
  backgroundColor: "black",
  fontColor: "white",
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
          style={{ backgroundColor: config.fontColor }}
        ></span>
        <span
          className="bar"
          style={{ backgroundColor: config.fontColor }}
        ></span>
        <span
          className="bar"
          style={{ backgroundColor: config.fontColor }}
        ></span>
      </div>
    );
  },
};

export default config;
