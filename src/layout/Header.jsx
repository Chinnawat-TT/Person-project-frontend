import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/use-Auth";

export default function Header() {
  const { authUser, logout } = useAuth();

  return (
    <header className=" flex h-12 gap-5 p-4 justify-between items-center bg-white top-0">
      <div className=" flex justify-center items-center gap-5 ">
        <Link to="/">
          <img className=" h-5" src="../../public/logoneww.png" alt="" />
        </Link>
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/kids">Kids</Link>
      </div>
      <div className=" flex justify-center items-center gap-2    ">
        {authUser?.isAdmin ? (
          <Link to="/admin">
            <span className="material-symbols-outlined">shield_person</span>
          </Link>
        ) : (
          ""
        )}
        {authUser ? (
          <Link to="/profile">
            <img src="../../public/icons8-user-48.png" alt="" />
          </Link>
        ) : (
          <Link to="/signup">SignUp</Link>
        )}

        <Link to="/cart">
          <img src="../../public/icons8-cart-48.png" alt="" />
        </Link>
        {authUser ? (
          <Link to="/">
          <div
            className=" cursor-pointer  flex justify-center items-center"
            onClick={logout}
          >
            {" "}
            <span>logout</span>
            <span className="material-symbols-outlined">logout</span>{" "}
          </div>
          </Link>
        ) : (
          <Link to="/login">
            <img src="../../public/icons8-user-48.png" alt="" />
          </Link>
        )}
      </div>
    </header>
  );
}
