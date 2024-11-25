import ErrorMessagePage from "pages/home/errorMessagePage";
import Layout from "pages/home/layout";
import LoginPage from "pages/auth/loginPage";
import SalesDataPage from "pages/home/salesDataPage";
import UserMetricsPage from "pages/home/userMetricsPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <Layout />,
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
    element: <LoginPage />,
  },
]);

export default router;
