import Home from "../containers/Home";
import Auth from "../containers/Auth";
import Login from "../components/Login";
import { Navigate } from "react-router-dom";

export const privateRoutes = [
  {
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Home />,
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
