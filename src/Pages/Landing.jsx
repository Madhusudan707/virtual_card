import { Login } from "../Components";
import { Home } from "./";
import { useUser } from "../contexts";

export const Landing = () => {
  const { loginData } = useUser();
  return <div>{loginData.id ? <Home /> : <Login />}</div>;
};
