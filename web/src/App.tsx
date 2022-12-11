import { useEffect, useContext } from "react";

import { Navbar } from "./components/Navbar";
import { usePageTitle } from "./hooks/usePageTitle";
import ThemeContext from "./context/theme";

import { config as globalConfig } from "./config/global.config";

const App: React.FC = () => {
  const theme = useContext(ThemeContext);

  usePageTitle(globalConfig.siteTitle);

  useEffect(() => {
    document.body.style.backgroundColor = theme.colorPrimaryDark;
  }, []);

  return <Navbar />;
};

export default App;
