import { useEffect } from "react";

import { Navbar } from "./components/Navbar";
import { usePageTitle } from "./hooks/usePageTitle";
import useThemeContext from "./hooks/use-theme-context";

import { config as globalConfig } from "./config/global.config";

const App: React.FC = () => {
  const theme = useThemeContext();

  usePageTitle(globalConfig.siteTitle);

  useEffect(() => {
    document.body.style.backgroundColor = theme.colorPrimaryDark;
  }, []);

  return <Navbar />;
};

export default App;
