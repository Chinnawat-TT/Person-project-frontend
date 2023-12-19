import { createContext, useEffect, useState } from "react";
import axios from "../config/axios";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utils/local-storage";
import {toast} from "react-toastify"

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
    []
  );

  

  const signup = async (registerObject) => {
    const response = await axios.post("/verifi/signup", registerObject);
    setAuthUser(response.data.user);
    addAccessToken(response.data.accessToken);
  };

  const login = async (certificate) => {
    const response = await axios.post("/verifi/login", certificate);
    setAuthUser(response.data.user);
    addAccessToken(response.data.accessToken);
    
    toast.success(`YUEMAi👋สวัสดี`)
    if (response.data.findCart.length > 0) {
      setNotificationCart(true);
    }
  };

  const logout = () => {
    removeAccessToken();
    setAuthUser(null);
    setNotificationCart(false);
    toast.success(` " ไว้เจอกันใหม่ ขอบคุณที่ใช้บริการ " `)
  };

  

  // console.log(authUser);
  return (
    <AuthContext.Provider
      value={{
        signup,
        authUser,
        login,
        logout,
        intialLoading,
        notificationCart,
        setNotificationCart,
        
        

      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
