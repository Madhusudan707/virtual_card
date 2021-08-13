import { useEffect } from "react";
import { useUser } from "../contexts";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    userDB,
    loginData,
    setLoginData,
  } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (loginData[0].id) {
      navigate("/home");
    }
    // eslint-disable-next-line
  }, [loginData]);

  const checkLogin = (email, password) => {
    if (email && password) {
      const userFound = userDB.filter((user) => {
        return user.email === email && user.password === password;
      });

      if (userFound) {
        setLoginData(userFound);
        localStorage.setItem("isLoginID",userFound[0].id)
      }
    }
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    checkLogin,
  };
};
