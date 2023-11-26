import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/use-Auth";
import { useEffect, useState } from "react";
import axios from "../config/axios";


export default function Header() {
  const location =useLocation()
  const { authUser, logout , notificationCart} = useAuth();
  // const [noti, setNoti]=useState(false)
  
  // console.log(notificationCart)

  // useEffect( ()=>{
  //   axios.get("/verifi/getcart")
  //   .then(res => {
  //     console.log(res.data)
  //     if(res.data.length > 0){
  //       setNoti(true)
  //     }
  //   }).catch( err => console.log(err))

  // },[])
 console.log(">>>>>>>>>>>>>>>",authUser)
 console.log("location <<<<<",location.pathname.split("/")[1])
 


  return (
    <header className=" flex h-12 gap-5 p-4 justify-between items-center bg-white top-0 ">
      <div className=" flex justify-center items-center gap-5 ">
        <Link to="/">
          <img className=" h-5" src="../../public/logoneww.png" alt="" />
        </Link>
        <Link to="/men">
          <span  className={`  hover:underline hover:underline-offset-4 hover:decoration-4 ${location.pathname.split("/")[1] === "men" ? "underline decoration-4 underline-offset-4" : ""}`}>Men</span>
          </Link>
        <Link to="/women">
          <span className={`  hover:underline hover:underline-offset-4 hover:decoration-4 ${location.pathname.split("/")[1] === "women" ? "underline decoration-4 underline-offset-4" : ""}`}>Women</span>
          </Link>
        <Link to="/kids">
          <span className={`  hover:underline hover:underline-offset-4 hover:decoration-4 ${location.pathname.split("/")[1] === "kids" ? "underline decoration-4 underline-offset-4" : ""}`}> Kids</span>
          </Link>
      </div>
      <div className=" flex justify-center items-center gap-2    ">
        {authUser?.isAdmin ? (
          <Link to="/admin">
            <span className="material-symbols-outlined">shield_person</span>
          </Link>
        ) : (
          ""
        )}
        {authUser?.isAdmin ? "" : authUser ? (
          <Link to="/profile">
            <div className="cursor-pointer  flex justify-center items-center">

            <span className="material-symbols-outlined ">account_circle</span>
            </div>
            {/* <img   src="../../public/icons8-user-48.png" alt="" /> */}
          </Link>
        ) : (
          <Link to="/signup">SignUp</Link>
        )} 
        
        {authUser ? <Link to={"/wishlist"}>
        <div className="cursor-pointer  flex justify-center items-center">
        <span className="material-symbols-outlined">favorite</span>
        </div>
        </Link> : ""}
        
        <Link to="/cart">
          <div className="cursor-pointer  flex justify-center items-center">
        {notificationCart ? <span className=" absolute right-30 p-1 rounded-lg bg-red-600"></span> : ""}
        {/* {noti ? <span className=" absolute right-30 p-1 rounded-lg bg-red-600"></span> : ""} */}
          {/* <img src="../../public/icons8-cart-48.png" alt="" /> */}
          <span className="material-symbols-outlined">shopping_cart</span>
          </div>
        </Link>


        {authUser ? (
          <Link to="/">
          <div
            className=" cursor-pointer  flex justify-center items-center"
            onClick={logout}
          >
            {" "}
            {/* <span>logout</span> */}
            <span className="material-symbols-outlined">logout</span>{" "}
          </div>
          </Link>
        ) : (
          <Link to="/login">
            {/* <img src="../../public/icons8-user-48.png" alt="" /> */}
            <div className="cursor-pointer  flex justify-center items-center">
              
            <span className="material-symbols-outlined ">account_circle</span>
            </div>
          </Link>
        )}
      </div>
    </header>
  );
}
