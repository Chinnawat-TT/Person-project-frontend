import { useEffect, useState } from "react"
import Loading from "../components/Loading";


export default function HomePage() {
  const [loading ,setLoading]= useState(false)
  useEffect( ()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 300);

  },[])
  return (
    <>
    {loading && <Loading/>}
    <div className="flex items-center justify-center w-full ">
        <img className =" object-contain " src="../../public/content2.png" alt=""  />
    </div>
    </>
  )
}
