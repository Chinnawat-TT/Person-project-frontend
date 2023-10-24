
import { useAuth } from '../../hooks/use-Auth'
import { Navigate } from "react-router-dom";

export default function AdminAuthenticate({children}) {
    const { authUser }=useAuth()

    console.log(authUser)
    if ( authUser.isAdmin === false ){
        return <Navigate to= "/" />
           }
           return children
}
