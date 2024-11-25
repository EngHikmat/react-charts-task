import ErrorMessagePage from "pages/errorMessagePage";
import LoginPage from "pages/loginPage";
import SalesDataPage from "pages/salesDataPage";
import UserMetricsPage from "pages/userMetricsPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
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
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
