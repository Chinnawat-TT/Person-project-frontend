import { useEffect, useState } from "react";
import CartItem from "../features/cart/CartItem";
import Loading from "../components/Loading";


export default function CartPage() {
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    setLoading(true)
  setTimeout(() => {
    setLoading(false)
  }, 350);
  },[])
  return (
    <>
    {loading && <Loading/>}
    <div>
      <CartItem/>
    </div>
    </>
  )
}
