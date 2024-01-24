import { useEffect, useState } from "react";
import AllOrder from "./AllOrder";
import axios from "../../config/axios";


export default function Order() {
  const [order,setOrder]=useState([])
  useEffect(()=>{
    axios.get("/admin/getOrder").then(res => setOrder(res.data.Order)).catch(err => console.log(err))
  },[])
  // console.log(">>>>>>>>>>>>>>>>>>>>",order)
  return (
    <div>
      {order?.map((el)=>(

      <AllOrder el={el} order={order} setOrder={setOrder}/>
      ))}
      </div>
  )
}
