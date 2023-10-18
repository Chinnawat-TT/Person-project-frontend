
import { useAuth } from '../../hooks/use-Auth'
import { Navigate } from "react-router-dom";

export default function AdminAuthenticate() {
    const { authUser }=useAuth()

    console.log(authUser)
    if ( authUser.isAdmin === true ){
        return <Navigate to= "/" />
           }
           return children
}
