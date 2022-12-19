// src/Index.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import NotFound from "./NotFound";
import CV from "./components/CV/CV";
import LoginForm from "./components/LoginForm/LoginForm";
import TodoSite from "./components/TodoSite/TodoSite";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
    },
    {
        path: "cv",
        element: <CV />
    },
    {
      path: "login",
      element: <LoginForm shouldRemember={false} onUsernameChange={() => {}} onPasswordChange={() => {}} onRememberChange={() => {}} onSubmit={() => {}}  />
    },
    {
      path: "cv",
      element: <CV />,
    },
    {
      path: "todo",
      element: <TodoSite />
    }
])

const rootNode = document.getElementById("app");

if (rootNode) {
  createRoot(rootNode).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
  );
}
