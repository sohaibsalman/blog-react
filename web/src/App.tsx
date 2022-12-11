import { useEffect } from "react";

import { Navbar } from "./components/Navbar";
import { usePageTitle } from "./hooks/usePageTitle";

import { config as globalConfig } from "./config/global.config";
import { config as stylesConfig } from "./config/styles.config";

const App: React.FC = () => {
  usePageTitle(globalConfig.siteTitle);

  useEffect(() => {
    document.body.style.backgroundColor = stylesConfig.colorPrimaryDark;
  }, []);

  return <Navbar />;
};

export default App;
