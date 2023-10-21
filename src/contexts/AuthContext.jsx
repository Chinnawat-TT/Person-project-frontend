import { createContext, useEffect, useState } from "react";
import axios from "../config/axios";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [intialLoading, setIntialLoading] = useState(true);
  const [notificationCart, setNotificationCart] = useState(false);
  useEffect(
    () => {
      try {
        if (getAccessToken()) {
          axios.get("/verifi/me").then((res) => {
            setAuthUser(res.data.user);
          });
          axios.get("/verifi/getcart").then((res) => {
            if (res.data.length > 0) {
              setNotificationCart(true);
            }
          });
        }
      } catch (err) {
        console.log(err);
      } finally {
        setTimeout(() => {
          setIntialLoading(false);
        }, 1000);
      }
    },

    //   if( getAccessToken()){
    //    axios.get('/verifi/me').then( (res)=>{
    //       setAuthUser(res.data.user)
    //     }).finally( ()=>{
    //       setTimeout(() => {
    //         setIntialLoading(false)
    //       }, 1000);
    //     })
    //   } else {
    //     setIntialLoading(false)
    //   }

    //  axios.get("/verifi/getcart")
    //   .then(res => {
    //     console.log(res.data)
    //     if(res.data.length > 0){
    //       setNotificationCart(true)
    //     }
    //   }).catch( err => console.log(err))

    []
  );
  
    console.log(notificationCart)

  const signup = async (registerObject) => {
    const response = await axios.post("/verifi/signup", registerObject);
    setAuthUser(response.data.user);
    addAccessToken(response.data.accessToken);
  };

  const login = async (certificate) => {
    const response = await axios.post("/verifi/login", certificate);
    setAuthUser(response.data.user);
    addAccessToken(response.data.accessToken);
    if (response.data.findCart.length > 0) {
      setNotificationCart(true);
    }
  };

  const logout = () => {
    removeAccessToken();
    setAuthUser(null);
    setNotificationCart(false);
  };

  console.log(authUser);
  return (
    <AuthContext.Provider
      value={{
        signup,
        authUser,
        login,
        logout,
        intialLoading,
        notificationCart,
        setNotificationCart
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
