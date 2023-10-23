import { useState } from "react";
import Carttotal from "./Carttotal";
import { useAuth } from "../../hooks/use-Auth";

export default function Cartshow( { el  } ) {
      const { setShowCart }=useAuth()
      const [totalPrice ,setTotalPrice]=useState([])
      const [among,setAmong]=useState([])
      
      const handleChangeAmong =(event)=>{
        const arr =[]
        arr.push({[event.target.name] : event.target.value ,price:el.products.price})
        setAmong([arr,...among])
        
      }
      
      const sumPrice =()=> among.quantity * among.price

      // console.log("total :",totalPrice)
      // console.log(among[0].quantity.length)
      // if(among[0].quantity.length > 0){
      //   console.log("++++++")
      //   //  setTotalPrice(sumPrice)
      // }
      console.log(among)
  return (
    <div>
      
      <div className=" h-1/3 w-1/2 border shadow-lg rounded-lg p-5 min-h-min flex gap-5  ">
        <div>
          <img className=" rounded-lg h-36 w-60 " src={el.products.mainImage} alt="" />
        </div>

        <div className=" flex flex-col ">
          <span>product name :{el.products.name} </span>
          <span>Product id :{el.products.id}</span>
          <span>Size :{el.size}</span>
          <span>pice : {el.products.price}</span>
          <span>quantity</span>
          <select name="quantity" id="size-select" className=" w-40" onChange={handleChangeAmong}>
            <option value="">You have selected</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>
      </div>
    </div>
  );
}
