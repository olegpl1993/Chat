import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "@/pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    lazy: async () => {
      const { Home } = await import("../pages/Home/Home");
      return { Component: Home };
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
