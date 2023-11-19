import axios from "../config/axios";
import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [newAmong, setNewAmong] = useState([]); 
  const [newPrice, setNewPrice] = useState({});

  const checkOutCart = async (data) => {
    try {
      const response = await axios.post("/verifi/checkout", data);
      console.log(response);
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
