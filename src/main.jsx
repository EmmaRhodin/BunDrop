import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import "./index.css";
import ErrorPage from "./pages/ErrorPage.jsx";

import HomePage from "./pages/HomePage.jsx";
import Menu from "./pages/Menu.jsx";
import PurchasePage from "./pages/PurchasePage.jsx";
import ConfirmationPage from "./pages/ConfirmationPage.jsx";

import { loader as homePageLoader } from "./pages/HomePage.jsx";
import { CartProvider } from "./context/CartContext";

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
            path: "checkout",
            element: <PurchasePage />,
          },
          {
            path: "confirmation",
            element: <ConfirmationPage />,
          },
          {
            path: "menu",
            element: <Menu />, // Parent route for all menu categories
            children: [
              {
                index: true,
                element: <Navigate to="burgers" replace />, // Redirect to /menu/burgers
              },
              {
                path: ":categoryParam", // Define dynamic route
                element: <Menu />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
