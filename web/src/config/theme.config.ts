import { ITheme } from "../interfaces/ITheme";

const config: ITheme = {
  default: "dark",
  dark: {
    colorPrimary: "#161b22",
    colorPrimaryDark: "#0d1117",
    fontColorPrimary: "#e2e8f0",
    fontColorSecondary: "#cbd5e1",
  },
  light: {
    colorPrimary: "white",
    colorPrimaryDark: "white",
    fontColorPrimary: "black",
    fontColorSecondary: "#cbd5e1",
  },
};

export { config };
