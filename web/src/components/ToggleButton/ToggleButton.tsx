import { useContext } from "react";

import ThemeContext from "../../context/theme";

const ToggleButton = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className="hamburger">
      <span
        className="bar"
        style={{ backgroundColor: theme.fontColorPrimary }}
      ></span>
      <span
        className="bar"
        style={{ backgroundColor: theme.fontColorPrimary }}
      ></span>
      <span
        className="bar"
        style={{ backgroundColor: theme.fontColorPrimary }}
      ></span>
    </div>
  );
};

export default ToggleButton;
