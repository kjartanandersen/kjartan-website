// src/Index.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import NotFound from "./NotFound";
import CV from "./components/CV/CV";
import Projects from "./components/Projects/Projects";
import TodoSite from "./components/TodoSite/TodoSite";

// const App = React.lazy(() => import('./App'));
// const NotFound = React.lazy(() => import('./NotFound'));
// const CV = React.lazy(() => import('./components/CV/CV'));
// const TodoSite = React.lazy(() => import('./components/TodoSite/TodoSite'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "cv",
    element: <CV />,
    errorElement: <NotFound />,
  },
  {
    path: "projects",
    element: <Projects />,
    errorElement: <NotFound />,
  },
  {
    path: "todo",
    element: <TodoSite />,
    errorElement: <NotFound />,
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
