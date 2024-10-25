import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    lazy: async () => {
      const { Main } = await import("../pages/Main/Main");
      return { Component: Main };
    },
    errorElement: <ErrorPage />,
  },
  {
    path: "/chat",
    lazy: async () => {
      const { Chat } = await import("../pages/Chat/Chat");
      return { Component: Chat };
    },
    errorElement: <ErrorPage />,
  },
]);
