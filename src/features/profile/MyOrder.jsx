import { useState } from 'react'
import Loading from '../../components/Loading'
import axios from '../../config/axios'
import { useNavigate } from 'react-router-dom'

export default function MyOrder({el,setOrder,order,refresh,setRefresh}) {
  const navigate =useNavigate()
  const [file,setFile]=useState(null)
  const [loading,setLoading]=useState(false)

  
  const sentFile = async(data)=>{
    const res = await axios.patch(`/verifi/confirmTrack/${el.id}`,data)
   
    const newSlip =res.data.update
    
    const updateSlip =order.findIndex((el)=> el.id == newSlip.id)
    
    order.splice(updateSlip,1,newSlip)
    setOrder([...order])
    // navigate("/profile")
    

    
  }

  const handlefile =async( event )=>{
    try {
      event.preventDefault();
      const formData = new FormData()
      if(file){
        formData.append('image',file)
    }
    setLoading(true)
    await sentFile(formData)
    setRefresh(!refresh)
    
    } catch (error) {
      
    } finally {
      setLoading(false)
  }
  }
  return (
    <div>
      { loading && <Loading/>}
    <div className=" border-2 p-5">
    <p>order : {el.id}</p>
    {el.items?.map(element => (
    <div className=' border-2 p-5 '>
        <img src={element.imageUrl} alt="" className=' w-40 h-40'/>
        <p>{element.name}</p>
        <p>quantiny : {element.quantiny}</p>
        <p>size : {element.size}</p>
        <p>sub total : {element.price}</p>
        
    </div>
    ))}
    <p>total : {el.orderTotal}</p>
    <p>status : {el.status}</p>

    <div className=' p-5'>
    <p>slip</p>
    { el.slip ? <img src={el.slip} alt=""  className=' w-40 h-40'/> : <p className=' text-red-500'>กรุณายืนยันสลิป </p>}
    </div>

    <div className=' flex '>
    <p>confirmSilp :  </p>
    <div className=' flex flex-col '>

    <input 
    type="file" 
    onChange={(event) => {
      if (event.target.files[0]) {
        setFile(event.target.files[0]);
      }
    }}
    />
    <button className=' bg-red-500 p-4' onClick={handlefile}>confirm</button>
    </div>
    </div>
    </div>
    </div>
  )
}
