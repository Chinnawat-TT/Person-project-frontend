import { useEffect, useState } from "react";
import { useAuth } from "../hooks/use-Auth";
import axios from "../config/axios";
import MyOrder from "../features/profile/MyOrder";
import Loading from "../components/Loading";

export default function ProfilePage() {
  const { authUser } = useAuth();

  const [user, setUser] = useState({});
  const [order, setOrder] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("member");

  useEffect(() => {
    setLoading(true);
    setUser(() => authUser);
    axios
      .get("/verifi/getMyOrder")
      .then((res) => setOrder(res.data.order))
      .catch((err) => console.log(err))
      .finally(() =>
        setTimeout(() => {
          setLoading(false);
        }, 350)
      );
  }, [refresh]);
  console.log(">>>>>>>>>>>>>", order);

  return (
    <>
      {loading && <Loading />}
      <div className=" px-10 flex flex-col gap-2">
        <h1 className=" text-xl pt-5"> สมาชิก </h1>

          <div className=" flex gap-10">

          <div className=" flex flex-col gap-4 p-4 w-44">
            <span className={`cursor-pointer ${ mode === "member" ? "underline decoration-2 underline-offset-4" : ""}`} onClick={() => setMode("member")}>
              สมาชิก
            </span>
            <span className={`cursor-pointer ${ mode === "order" ? "underline decoration-2 underline-offset-4" : ""}`} onClick={() => setMode("order")}>
              รายการสินค้าที่ซื้อ
            </span>
          </div>
        { mode === "member" ? <div className="border w-full p-4">
          <h2 className="">สมาชิก</h2>
          <p className=" font-sans">email: {user.email}</p>
          <p className=" font-sans">fullname : {user.fullName}</p>
        </div> : ""}
        { mode === "order" ? <div className=" border-2 w-full">
          <h2 className="pt-4 px-5">รายการสินค้าที่ซื้อ</h2>
          {order?.map((el) => (
            <div key={el.id}>
              <MyOrder
                el={el}
                order={order}
                setOrder={setOrder}
                refresh={refresh}
                setRefresh={setRefresh}
              />
            </div>
          ))}
        </div> : ""}

          </div>
        
        

        
        
      </div>
    </>
  );
}
