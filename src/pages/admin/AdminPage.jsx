import { useEffect, useState } from "react";
import Products from "../../features/admin/Products";
import Order from "../../features/admin/Order";
import axios from "../../config/axios";
import AllProduct from "../../features/admin/AllProduct";




export default function AdminPage() {
  const [isShow, setIsShow] = useState("allProduct");
  const [data, setData] = useState([]);
  
//   useEffect(() => {
//     axios
//       .get("/admin")
//       .then((res) => setData(res.data))
//       .catch((err) => console.log(err));
//   }, []);
// console.log(data)
  
  return (
    <div>
      <span>ADMIN </span>
      
      <div className=" flex">
        <div className=" flex flex-col border rounded-lg gap-5 w-80 ">
          <span>sild bar</span>
          <button
            className={`cursor-pointer ${ isShow === "allProduct" ? "underline decoration-2 underline-offset-4" : ""} hover:font-semibold`}
            onClick={() => setIsShow("allProduct")}
          >
            All Product
          </button>
          <button
            className={`cursor-pointer ${ isShow === "order" ? "underline decoration-2 underline-offset-4" : ""} hover:font-semibold`}
            onClick={() => setIsShow("order")}
          >
            Order
          </button>
          <button
            className={`cursor-pointer ${ isShow === "createProduct" ? "underline decoration-2 underline-offset-4" : ""} hover:font-semibold`}
            onClick={() => setIsShow("createProduct")}
          >
            Create Product
          </button>
        </div>
        <div className=" border rounded-lg w-5/6 ">
          <div>

            
            {/* {data?.map( (el,index)=>(
                <div key={index}>
                  <TableAllProduct el={el}/>
                </div>
            ))} */}

            {isShow === "allProduct" ? <AllProduct />: ""}

            {isShow === "createProduct" ? <Products /> : ""}
            {isShow === "order" ? <Order /> : ""}
            
          </div>
        </div>
      </div>
    </div>
  );
}
