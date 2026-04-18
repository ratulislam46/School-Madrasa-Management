import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import HomePage from "../Page/Home/HomePage";
import ErrorPage from "../Components/ErrorPage";
import AllNotices from "../Page/AllNotices/AllNotices";
import Messages from "../Page/Messages/Messages";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: HomePage
      },
      {
        path: "all-notices",
        Component: AllNotices
      },
      {
        path: "messages",
        Component: Messages
      }
    ]
  }
]);