// src/AppRouter.jsx

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Layout from './layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        index: true, 
        element: <Dashboard/>,
      },
    ]
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
