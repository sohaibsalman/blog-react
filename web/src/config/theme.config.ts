import { ITheme } from "../interfaces/ITheme";

const config: ITheme = {
  default: "dark",
  dark: {
    colorPrimary: "#161b22",
    colorPrimaryDark: "#0d1117",
    fontColorPrimary: "white",
  },
  light: {
    colorPrimary: "white",
    colorPrimaryDark: "white",
    fontColorPrimary: "black",
  },
};

export { config };
