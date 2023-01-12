import React from "react";
import { useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
import { privateRoutes, publicRoutes } from "../routes/routes";
const Root = () => {
  const { token } = useSelector((state) => state.auth);
  const content = token ? privateRoutes : publicRoutes;
  return <>{useRoutes(content)}</>;
};

export default Root;
