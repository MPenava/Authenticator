import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { MainLayout } from "@layout";

import Dashboard from "@features/pages/Dashboard";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <>error</>,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/settings",
        element: <>Settings</>,
      },
    ],
  },
];

const router = createBrowserRouter(routes, {
  basename: import.meta.env.VITE_APP_BASENAME || "",
});

const Router = () => (
  <Suspense fallback={<>loading</>}>
    <RouterProvider router={router} />
  </Suspense>
);

export { Router };
