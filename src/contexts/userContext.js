import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const userDB = [
    {
      id: 1,
      email: "test@vc.com",
      password: "123456",
    },
    {
      id: 2,
      email: "test2@vc.com",
      password: "123456",
    },
    {
      id: 3,
      email: "test3@vc.com",
      password: "123456",
    },
    {
      id: 4,
      email: "test4@vc.com",
      password: "123456",
    },
    {
      id: 5,
      email: "test5@vc.com",
      password: "123456",
    },
  ];
  const [email, setEmail] = useState("test@vc.com");
  const [password, setPassword] = useState("123456");
  // const [userDB, setUserDB] = useState(user);
  const [loginData, setLoginData] = useState([
    { id: "", email: "", password: "" },
  ]);

  return (
    <UserContext.Provider
      value={{
        email,
        password,
        setEmail,
        setPassword,
        userDB,
        loginData,
        setLoginData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
