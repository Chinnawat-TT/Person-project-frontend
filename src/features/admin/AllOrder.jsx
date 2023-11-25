import axios from '../../config/axios'
import React, { useState } from 'react'

export default function AllOrder({el ,order,setOrder}) {
  const [obj,setObj]=useState({})
  const changeStatus = {status : "SUCCESS"}

  console.log("newObj",obj)

  const handleConfirm =async ()=>{
    
   const res = await axios.patch(`/admin/approve/${el.id}`,changeStatus)

  console.log(res)
    const newData = res.data.update;

    const updateData = order.findIndex((el) => el.id == newData.id);

    order.splice(updateData, 1, newData);
    setOrder([...order]);

  }
  return (
    <div>
    <div className=" border-2 p-5">
    <p>order : {el.id}</p>
    {el.items?.map(element => (
    <div className=' border-2 p-5 '>
        {/* <img src={element.imageUrl} alt="" className=' w-40 h-40'/> */}
        <p>{element.name}</p>
        <p>quantiny : {element.quantiny}</p>
        <p>size : {element.size}</p>
        <p>sub total : {element.price}</p>
        
    </div>
    ))}
    <p>total : {el.orderTotal}</p>
    <p>status : {el.status === "SUCCESS" ? <p className=' text-green-500'>SUCCESS</p> : el.status }</p>
    
    <div>
      <p>slip : </p>
      {el.slip ? <p className=' text-green-500'>ยืนยันสลิป</p> : ""}
      {el.slip ? <img src={el.slip} alt="" className=' w-40 h-40'/> :<p className=' text-red-500'>ลูกค้ายังไม่ยืนยันสลิป</p>}
      
    </div>

    {/* <div className=' flex '>
    <p>confirmSilp :  </p>
    <div className=' flex flex-col '>

    <input type="file" />
    <button className=' bg-red-500 p-4'>confirm</button>
    </div>
    </div> */}
    <div>
      {el.status === "SUCCESS" ? "" : <button  className=' p-5 bg-green-200' onClick={handleConfirm}>confirm order</button> }
      
    </div>
    </div>
    </div>
  )
}
