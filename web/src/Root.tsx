import React from "react";
import { Outlet } from "react-router-dom";

import { Navbar } from "./components/Navbar";

const Root = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
    </React.Fragment>
  );
};

export default Root;
