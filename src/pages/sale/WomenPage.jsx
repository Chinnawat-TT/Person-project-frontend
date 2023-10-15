import { useEffect, useState } from "react";
import SaleCard from "./Salecard";
import axios from "../../config/axios";



export default function WomenPage() {
  const [show ,setShow]=useState([])

  useEffect( ()=>{
    axios.get("/sale/women").then( res => setShow(res.data)).catch( err => console.log(err))
  },[])
  return (
    <div className=" flex flex-col md:flex-row gap-4 p-4 w-full">
      {show.map((el,index)=>(
        <div key={index}>
          
          <SaleCard show={el}/>
        </div>
      ))}
    </div>

  )
}
