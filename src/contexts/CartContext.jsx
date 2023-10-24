import { createContext, useState } from "react"

export const CartContext = createContext()

export default function CartContextProvider({children}) {

    const [newAmong ,setNewAmong]=useState({name:555})
    const [newPrice ,setNewPrice]=useState({})

    const checkOutCart = async (data,totalPrice)=> {
        try {
          const objtotal ={}
        
          const response = await axios.post("/verifi/checkout",data)
          console.log(response)
        } catch (err) {
          console.log(err)
        }
       }
  return (
    <CartContext.Provider
    value={{setNewAmong,newAmong }}
    >
        
    {children}
    </CartContext.Provider>
  )
}

