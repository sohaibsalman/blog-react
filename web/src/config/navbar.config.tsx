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
  toggleButton: {
    render: () => {
      return (
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      );
    },
  },
};

export default config;
