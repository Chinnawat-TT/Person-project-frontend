import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/use-Auth";

export default function RedireactAuthenticated({ children }) {
  const { authUser } = useAuth();
  console.log("RedireactAuthenticated =", authUser);
  if (authUser === null) {
    toast.error("กรุณาสมัครสมาชิก")
    return <Navigate to="/" />;
  }
  return children;
}
