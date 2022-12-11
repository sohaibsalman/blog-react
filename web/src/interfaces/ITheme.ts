interface ITheme {
  default: string;
  dark: IThemeMode;
  light: IThemeMode;
}

interface IThemeMode {
  colorPrimary: string;
  colorPrimaryDark: string;
  fontColorPrimary: string;
}

export type { ITheme, IThemeMode };
