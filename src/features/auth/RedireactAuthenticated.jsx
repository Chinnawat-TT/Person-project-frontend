import { Navigate } from "react-router-dom"
import { useAuth } from "../../hooks/use-Auth"


export default function RedireactAuthenticated({ children }) {
    const { authUser }=useAuth()
    console.log("RedireactAuthenticated =",authUser)
    if(!authUser){
        return <Navigate to=" /"/>
    }
  return children
}
