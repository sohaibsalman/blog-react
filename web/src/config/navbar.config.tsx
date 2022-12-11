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
  toggleButton: () => <ToggleButton />,
};

export { config };
