import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Container = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Container;
