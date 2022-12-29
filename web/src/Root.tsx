import React from "react";
import { Outlet } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";

import "./index.css";

const Root = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="main container">
        <Outlet />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Root;
