import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className=" flex h-12 gap-5 p-4 justify-between items-center bg-white sticky top-0 z-30">
      
        <div className=" flex justify-center items-center gap-5 ">
          <Link to="/">
            <img className=" h-5"
            src="../../public/Logonew.png" alt="" />
          </Link>
          <Link to ="/men">Men</Link>
          <Link to ="/women">Women</Link>
          <Link to="/kids">Kids</Link>
        </div>
        <div className=" flex justify-center items-center gap-2    ">
          <Link to="/signup">SignUp</Link>
          <Link to="/cart">
            <img src="../../public/icons8-cart-48.png" alt="" />
          </Link>
          <Link to = "/login">
            <img src="../../public/icons8-user-48.png" alt="" />
          </Link>
        </div>
      
    </header>
  );
}
