import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";

import { usePageTitle } from "./hooks/usePageTitle";
import useThemeContext from "./hooks/use-theme-context";
import router from "./router";

import { config as globalConfig } from "./config/global.config";

const App: React.FC = () => {
  const theme = useThemeContext();

  usePageTitle(globalConfig.siteTitle);

  useEffect(() => {
    document.body.style.backgroundColor = theme.colorPrimaryDark;
  }, []);

  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
};

export default App;
