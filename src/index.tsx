// src/index.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./redesign/styles/global.css";

import Login from "./redesign/pages/Login";
import Approved from "./redesign/pages/Approved";
import Portfolio from "./redesign/pages/Portfolio";
import Experience from "./redesign/pages/Experience";
import Education from "./redesign/pages/Education";
import Blog from "./redesign/pages/Blog";

import NotFound from "./NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: "/approved",
    element: <Approved />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/experience",
    element: <Experience />,
  },
  {
    path: "/education",
    element: <Education />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
]);

const rootNode = document.getElementById("app");

if (rootNode) {
  createRoot(rootNode).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
