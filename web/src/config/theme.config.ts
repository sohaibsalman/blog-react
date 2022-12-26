import { ITheme } from "../interfaces/ITheme";

const config: ITheme = {
  default: "dark",
  dark: {
    colorPrimary: "#161b22",
    colorPrimaryDark: "#0d1117",
    colorSecondary: "#22c55e",
    fontColorPrimary: "#e2e8f0",
    fontColorSecondary: "#cbd5e1",
  },
  light: {
    colorPrimary: "white",
    colorPrimaryDark: "white",
    colorSecondary: "#064e3b",
    fontColorPrimary: "black",
    fontColorSecondary: "#cbd5e1",
  },
};

export { config };
