// src/AppRouter.jsx

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Layout from "./layout";
import Cart from "./pages/Cart";
import Billing from "./pages/Billing";
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/cart",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Cart />,
      },
    ],
  },
  {
    path: "/billing",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Billing />,
      },
    ],
  },
  {
    path: "/account/:id",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ProductDetails />,
      },
    ],
  }
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
