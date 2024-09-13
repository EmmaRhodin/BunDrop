import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import ErrorPage from "./pages/ErrorPage.jsx";

import HomePage from "./pages/HomePage.jsx";
import Menu from "./pages/Menu.jsx";
import Basket from "./pages/Basket.jsx";
import PurchasePage from "./pages/PurchasePage.jsx";

import { loader as homePageLoader } from "./pages/HomePage.jsx";

import Contact from "./routes/contact.jsx";

import Root from "./routes/root.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <HomePage />,
            loader: homePageLoader,
          },
          {
            path: "menu",
            element: <Menu />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
