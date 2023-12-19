import { useNavigate } from "react-router-dom";
import axios from "../config/axios";
import { createContext, useEffect, useState } from "react";
import { useAuth } from "../hooks/use-Auth";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [dataCart,setDataCart] = useState([])
  const [newAmong, setNewAmong] = useState([]); 
  const [newPrice, setNewPrice] = useState(0);
  const [totalCart,setTotalCart]=useState(0)
  const {setNotificationCart}=useAuth()
  const navigate =useNavigate()
  console.log("ORDER TOTAL ",newPrice)

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

  const getDataCart = async () => {
    try {
      console.log("useEffect running...");
      const res = await axios("verifi/getcart");
      setDataCart(res.data);

      const getQuantity = res.data.map((el) => el.quantity); // Use res.data here
      console.log("getQuantity", getQuantity);

      const getPrice = res.data.map((el) => el.products.price); // Use res.data here
      console.log("getPrice", getPrice);

      setNewPrice(
        getQuantity.reduce(
          (acc, curr, index) => acc + curr * parseInt(getPrice[index]),
          0
        )
      );

      
    } catch (err) {
      console.log(err);
    } 
  };

  const deleteItemCart = async (itemId, cartId) => {
    try {
      const response = await axios.delete(`/verifi/delete/${itemId}/${cartId}`);
      console.log(response);

      const newData = dataCart.filter(
        (el) => el.id !== response.data.cartTargat.id
      );
      console.log("+++++++++++++", newData);

      setDataCart(newData);

      if (dataCart.length === 1) {
        setNotificationCart(false);
      }
      
      getDataCart()
      toast.error("Delete");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(()=>{
    getDataCart()
  },[newAmong, newPrice])
  console.log(">>>>>>>", newAmong);
  console.log("data in cartcontext",dataCart)
  return (
    <CartContext.Provider value={{ setNewAmong, newAmong ,setNewPrice,newPrice ,checkOutCart ,totalCart,setTotalCart,dataCart,setDataCart,deleteItemCart,getDataCart}}
    >
      {children}
    </CartContext.Provider>
  );
}
