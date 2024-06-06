import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { MainLayout } from "@layout";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <>error</>,
    children: [],
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
