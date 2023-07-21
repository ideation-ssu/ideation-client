import React, { useEffect } from "react";
import { CookiesProvider } from "react-cookie";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { isLoggedIn } from "@/utils/tokenUtils";
import loadable from "@loadable/component";

const Root = loadable(() => import("./pages/index"));
const Login = loadable(() => import("./pages/login"));
const SignUp = loadable(() => import("./pages/signup"));

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

function RootComponent() {
  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <React.StrictMode>
      <CookiesProvider>
        <RouterProvider router={router} />
      </CookiesProvider>
    </React.StrictMode>
  );
}

root.render(<RootComponent />);
