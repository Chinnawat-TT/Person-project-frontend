import { useEffect, useState } from "react"
import { useAuth } from "../hooks/use-Auth"
import axios from "../config/axios"
import MyOrder from "../features/profile/MyOrder"


export default function ProfilePage() {
  const {authUser}=useAuth()
  
  const [user,setUser]=useState({})
  const [order,setOrder]=useState([])
  const [refresh,setRefresh] = useState(false)
  
  useEffect(()=>{
    setUser(()=>authUser)
    axios.get("/verifi/getMyOrder").then(res => setOrder(res.data.order)).catch(err=> console.log(err))
  },[refresh])
  console.log(">>>>>>>>>>>>>",order)
  
  return (
    <>
    <div>
    <div>
      ProfilePage
    </div>
    <div className=" border-2">
    <p>email: {user.email}</p>
    <p>fullname : {user.fullName}</p>
    </div>
    <div>
      My Order
    </div>
    {order?.map( (el)=>(
    <div key={el.id}>
    <MyOrder el={el} order={order} setOrder={setOrder} refresh={refresh}setRefresh = {setRefresh} />
    </div>

    ))}
    </div>
    </>
  )
}
