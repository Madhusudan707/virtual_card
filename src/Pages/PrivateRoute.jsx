import { Navigate, Route } from "react-router-dom";
import { useUser } from "../contexts";

export const PrivateRoute = ({ path, ...props }) => {
  const { loginData } = useUser();
  return loginData[0].id ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate state={{ from: path }} replace to="/" />
  );
};
