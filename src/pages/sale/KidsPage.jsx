import { useEffect, useState } from "react"
import axios from "../../config/axios"
import SaleCard from "./Salecard"

export default function KidsPage() {
  const [show,setShow]=useState([])
  useEffect( ()=>{
    axios.get('/sale/kids').then(res => setShow(res.data)).catch(err => console.log(err))

  },[])
  return (
    <div className=" flex flex-col md:flex-row gap-4 p-4 w-full items-center justify-center">
    {show.map((el,index)=>(
      <div key={index}>
        
        <SaleCard show={el}/>
      </div>
    ))}
  </div>
  )
}
