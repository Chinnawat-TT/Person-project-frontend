import React from 'react'

export default function AllOrder({el}) {
  return (
    <div>
    <div className=" border-2 p-5">
    <p>order : {el.id}</p>
    {el.items.map(element => (
    <div className=' border-2 p-5 '>
        {/* <img src={element.imageUrl} alt="" className=' w-40 h-40'/> */}
        <p>{element.name}</p>
        <p>quantiny : {element.quantiny}</p>
        <p>size : {element.size}</p>
        <p>sub total : {element.price}</p>
        
    </div>
    ))}
    <p>total : {el.orderTotal}</p>
    <p>status : {el.status}</p>
    {/* <div className=' flex '>
    <p>confirmSilp :  </p>
    <div className=' flex flex-col '>

    <input type="file" />
    <button className=' bg-red-500 p-4'>confirm</button>
    </div>
    </div> */}
    </div>
    </div>
  )
}
