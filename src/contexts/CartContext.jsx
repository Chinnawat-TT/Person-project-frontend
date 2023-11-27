import { useNavigate } from "react-router-dom";
import axios from "../config/axios";
import { createContext, useState } from "react";
import { useAuth } from "../hooks/use-Auth";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [newAmong, setNewAmong] = useState([]); 
  const [newPrice, setNewPrice] = useState({});
  const {setNotificationCart}=useAuth()
  const navigate =useNavigate()
  const checkOutCart = async (data) => {
    try {
      const response = await axios.post("/verifi/checkout", data);
      console.log("checkout response",response);
      axios.get("/verifi/getcart").then((res) => {
        if (res.data.length > 0) {
          setNotificationCart(true);
        } else {
          setNotificationCart(false)
        }
      })
      navigate("/profile")
      setNewAmong([])
      setNewPrice({})
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <CartContext.Provider value={{ setNewAmong, newAmong ,setNewPrice,newPrice ,checkOutCart}}
    >
      {children}
    </CartContext.Provider>
  );
}
