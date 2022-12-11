import React, { createContext, ReactNode } from "react";

import { config } from "../config/theme.config";
import { IThemeMode } from "../interfaces/ITheme";

const ThemeContext = createContext(config.dark);

interface IProps {
  children: ReactNode;
}

const Provider: React.FC<IProps> = ({ children }) => {
  let valuesToShare: IThemeMode;

  if (config.default === "dark") valuesToShare = config.dark;
  else valuesToShare = config.light;

  return (
    <ThemeContext.Provider value={valuesToShare}>
      {children}
    </ThemeContext.Provider>
  );
};

export { Provider };
export default ThemeContext;
