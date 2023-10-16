import { createContext, useEffect, useState } from "react"
import axios from "../config/axios"
import { addAccessToken, getAccessToken, removeAccessToken } from "../utils/local-storage";



export const AuthContext =createContext();

export default function AuthContextProvider({ children }) {
const [authUser , setAuthUser]= useState(null)
const [intialLoading ,setIntialLoading]=useState(true)

useEffect( ()=>{
  if( getAccessToken()){
    axios.get('/verifi/me').then( (res)=>{
      setAuthUser(res.data.user)
      console.log("loading in comming")
    }).finally( ()=>{
      setTimeout(() => {
        setIntialLoading(false)
      }, 1000);
    })
  } else {
    setIntialLoading(false)
  }
},[])

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
const logout =()=>{
  removeAccessToken()
  setAuthUser(null)
  
}

console.log(authUser)
  return (
    <AuthContext.Provider value={ {signup ,authUser ,login ,logout , intialLoading} } >
        {children}
    </AuthContext.Provider>
  )
}
