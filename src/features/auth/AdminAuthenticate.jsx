import { toast } from "react-toastify";
import { useAuth } from "../../hooks/use-Auth";
import { Navigate } from "react-router-dom";

export default function AdminAuthenticate({ children }) {
  const { authUser } = useAuth();

  console.log(authUser);
  if (authUser.isAdmin === false) {
    console.log("+++++++++++");
    toast.error("คุณไม่ได้รับอนุญาติ");
    return <Navigate to="/" />;
  }
  return children;
}
