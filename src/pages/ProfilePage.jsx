import { useEffect, useState } from "react"
import { useAuth } from "../hooks/use-Auth"
import axios from "../config/axios"
import MyOrder from "../features/profile/MyOrder"
import Loading from "../components/Loading"


export default function ProfilePage() {
  const {authUser}=useAuth()
  
  const [user,setUser]=useState({})
  const [order,setOrder]=useState([])
  const [refresh,setRefresh] = useState(false)
  const [loading,setLoading] = useState(false)

  
  useEffect(()=>{
    setLoading(true)
    setUser(()=>authUser)
    axios.get("/verifi/getMyOrder")
    .then(res => setOrder(res.data.order))
    .catch(err=> console.log(err))
    .finally(()=>setTimeout(() => {
      setLoading(false)
    }, 350))
  },[refresh])
  console.log(">>>>>>>>>>>>>",order)
  
  return (
    <>
    {loading && <Loading/>}
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
