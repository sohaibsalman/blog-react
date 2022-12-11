import React, { createContext, ReactNode } from "react";

import { config as theme } from "../config/theme.config";

const ThemeContext = createContext(theme.dark);

interface IProps {
  children: ReactNode;
}

const Provider: React.FC<IProps> = ({ children }) => {
  const valuesToShare = theme.dark;
  return (
    <ThemeContext.Provider value={valuesToShare}>
      {children}
    </ThemeContext.Provider>
  );
};

export { Provider };
export default ThemeContext;
