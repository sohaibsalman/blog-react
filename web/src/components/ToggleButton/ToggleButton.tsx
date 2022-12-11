import useThemeContext from "../../hooks/use-theme-context";

const ToggleButton = () => {
  const theme = useThemeContext();
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
