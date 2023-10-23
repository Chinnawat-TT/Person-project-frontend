import { useEffect, useState } from "react";
import axios from "../../config/axios";
import Cartshow from "./Cartshow";
import Carttotal from "./Carttotal";
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/use-Auth";

export default function CartItem() {
  const [data, setData] = useState([]);
  const {setNotificationCart}=useAuth()
  // const [totalPrice ,setTotalPrice]=useState([])

  // const [among,setAmong]=useState([])

  // const handleChangeAmong =(event)=>{
  //   const obj = {[event.target.name] : event.target.value,price:el.products.price ,id :el.products.id }
  //   console.log(obj)
  //   setAmong([obj,...among])
    
  // }

 const deleteItemCart =async (itemId)=>{
  try {
      const response = await axios.delete(`/verifi/delete/${itemId}`)
      console.log(response)
       setData(data.filter( el => el.id !== response.data.cartTargat.id))
       toast("Delete")
  } catch (err) {
    console.log(err)
  }
 }

 const sumPrice = (among) =>{
  return among.reduce( (acc,curr)=>{
    let total = curr.quantity * curr.price
    acc += total
    return acc
  },0)
 }


   
  useEffect(() => {
    axios("verifi/getcart")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  
 
  
   if(data.length > 0){
    
    setNotificationCart(true)
   } else {
    setNotificationCart(false)
   }

  return (
    
      <div>
        
        {data.map( (el,index) =>(
          <Cartshow el={el} key={index} deleteItemCart={deleteItemCart} sumPrice={sumPrice} />
    //       <div key={index}>
      
    //   <div className=" h-1/3 w-1/2 border shadow-lg rounded-lg p-5 min-h-min flex gap-5  " >
      
    //     <div>
        
    //       <img className=" rounded-lg h-36 w-60 " src={el.products.mainImage} alt="" />
    //     </div>

    //     <div className=" flex flex-col ">
        
    //       <span>{el.products.name} </span>
    //       <span>Product id :{el.products.id}</span>
    //       <span>Size :{el.size}</span>
    //       <span>pice : {el.products.price}</span>
    //       <span>quantity</span>
    //       <select name="quantity" id="size-select" className=" w-40" onChange={handleChangeAmong}>
    //         <option value="">You have selected</option>
    //         <option value="1">1</option>
    //         <option value="2">2</option>
    //         <option value="3">3</option>
    //         <option value="4">4</option>
    //         <option value="5">5</option>
    //         <option value="6">6</option>
    //         <option value="7">7</option>
    //         <option value="8">8</option>
    //         <option value="9">9</option>
    //         <option value="10">10</option>
    //         <option value="11">11</option>
    //         <option value="12">12</option>
    //       </select>
    //      <span className=" cursor-pointer">Delete</span>
    //     </div>
    //   </div>
    // </div>
        ))}
        
        <Carttotal/>
      </div>
      
    
  );
}
