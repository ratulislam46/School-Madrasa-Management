import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import HomePage from "../Page/Home/HomePage";
import ErrorPage from "../Components/ErrorPage";
import AllNotices from "../Page/AllNotices/AllNotices";
import Messages from "../Page/Messages/Messages";
import History from "../Page/History/History";
import AllTeachers from "../Page/AllTeachers/AllTeachers";
import AllNews from "../Page/AllNews/AllNews";
import NewsDetails from "../Page/AllNews/NewsDetails";
import Contact from "../Page/Contact/Contact";
import RulesRegulation from "../Page/RulesRegulation/RulesRegulation";
import AdmissionForm from "../Page/AdmissionForm/AdmissionForm";

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
      },
      {
        path: '/history',
        Component: History
      },
      {
        path: 'all-teachers',
        Component: AllTeachers
      },
      {
        path: 'all-news',
        Component: AllNews
      },
      {
        path: "news/:id",
        Component: NewsDetails
      },
      {
        path: 'contact',
        Component: Contact
      },
      {
        path: 'rules-regulation',
        Component: RulesRegulation
      },
      {
        path: 'admission-form',
        Component: AdmissionForm
      }
    ]
  }
]);