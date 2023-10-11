import { createContext, useState } from "react"
import axios from "../config/axios"
import { addAccessToken } from "../utils/local-storage";

export const AuthContext =createContext();

export default function AuthContextProvider({ children }) {
const [authUser , setAuthUser]= useState(null)

const signup = async (registerObject) => {
  const response = await axios.post('/verifi/signup', registerObject)
  setAuthUser(response.data.user)
  addAccessToken(response.data.accessToken)
  console.log(response)
}
const login = async (certificate) =>{
  const response = await axios.post('/verifi/login' ,certificate)
  setAuthUser(response.data.user)
  addAccessToken(response.data.accessToken)
  console.log(response)
}

  return (
    <AuthContext.Provider value={ {signup ,authUser ,login } } >
        {children}
    </AuthContext.Provider>
  )
}
