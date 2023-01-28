import { Navigate } from "react-router-dom";
import Container from "../containers/Container";
import Auth from "../containers/Auth";
import Login from "../components/Login";
import Home from "../pages/Home";
import Flow from "../pages/Flow";
import FlowSection from "../pages/FlowSection";
import Report from "../pages/Report";
import Store from "../pages/Store";

export const privateRoutes = [
  {
    element: <Container />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/flow/:idFlow",
        element: <Flow />,
      },
      {
        path: "/flow/:idFlow/:typeFlow/:prefixTime",
        element: <FlowSection />,
      },
      {
        path: "/report",
        element: <Report />,
      },
      {
        path: "/store",
        element: <Store />,
      },
    ],
  },
];
export const publicRoutes = [
  {
    element: <Auth />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      { path: "*", element: <Navigate to="/login" /> },
    ],
  },
];
