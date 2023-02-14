import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

const LayoutRoot = () => {
  return (
    <>
      <div className="h-full bg-veryDarkVioletMain">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default LayoutRoot;
