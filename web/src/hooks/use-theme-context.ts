import { useContext } from "react";

import ThemeContext from "../context/theme";

const useThemeContext = () => {
  return useContext(ThemeContext);
};

export default useThemeContext;
