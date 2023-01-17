import { Navigate } from "react-router-dom";
import Container from "../containers/Container";
import Auth from "../containers/Auth";
import Login from "../components/Login";
import Home from "../pages/Home";
import Flow from "../pages/Flow";

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
