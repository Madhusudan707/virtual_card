import {useEffect } from "react";
import { useUser } from "../contexts";
import {useNavigate} from 'react-router-dom'

export const useLogin = () => {
  const { email, setEmail, password, setPassword, userDB,loginData,setLoginData } = useUser();
  const navigate = useNavigate()

  useEffect(() => {
    if(loginData[0].id){
      navigate('/home')
    }
   // eslint-disable-next-line 
  },[loginData]);

  const checkLogin = (email, password) => {
    if (email && password) {
      const userFound = userDB.filter((user) => {
        return user.email === email && user.password === password
        // if (user.email === email && user.password === password){
        //   return true
        // } return 
      });

     
      if(userFound){
        setLoginData(userFound)
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
