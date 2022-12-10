import { Navbar } from "./components/Navbar";
import { usePageTitle } from "./hooks/usePageTitle";

import { config as globalConfig } from "./config/global.config";

const App: React.FC = () => {
  usePageTitle(globalConfig.siteTitle);

  return <Navbar />;
};

export default App;
