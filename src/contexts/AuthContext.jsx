import { createContext, useState } from "react"
import axios from "../config/axios"

export const AuthContext =createContext();

export default function AuthContextProvider({ children }) {
const [authUser , setAuthUser]= useState(null)

const register = async registerObject => {
  const response = await axios.post('/verifi/signup', registerObject)
  setAuthUser(response.data.user)
}

  return (
    <AuthContext.Provider value={ {register} } >
        {children}
    </AuthContext.Provider>
  )
}
