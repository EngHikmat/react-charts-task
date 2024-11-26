import { Navigate } from "react-router-dom";
import useAuthStore from "store/auth.store";

interface Props {
  children: React.ReactNode;
  page: "dashboard" | "login";
}
const IsAuth = ({ page, children }: Props) => {
  const { isAuthenticated } = useAuthStore();
  if (isAuthenticated && page == "dashboard") {
    return children;
  } else if (!isAuthenticated && page == "login") {
    return children;
  } else if (isAuthenticated && page == "login") {
    return <Navigate to="/" />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default IsAuth;
