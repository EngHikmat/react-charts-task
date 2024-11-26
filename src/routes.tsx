import ErrorMessagePage from "pages/home/errorMessagePage";
import Layout from "pages/home/layout";
import LoginPage from "pages/auth/loginPage";
import SalesDataPage from "pages/home/salesDataPage";
import UserMetricsPage from "pages/home/userMetricsPage";
import { createBrowserRouter } from "react-router-dom";
import IsAuth from "isAuth";

const router = createBrowserRouter([
  {
    element: (
      <IsAuth page="dashboard">
        <Layout />
      </IsAuth>
    ),
    children: [
      {
        path: "/",
        element: <UserMetricsPage />,
      },
      {
        path: "/sales-data",
        element: <SalesDataPage />,
      },
      {
        path: "/error-ui",
        element: <ErrorMessagePage />,
      },
    ],
  },

  {
    path: "/login",
    element: (
      <IsAuth page="login">
        <LoginPage />
      </IsAuth>
    ),
  },
]);

export default router;
