import { useState } from "react";
import Products from "./Products";
import Order from "./Order";
import AdminAllProduct from "./AdminAllProduct";


export default function AdminPage() {
    const [isShow, setIsShow] = useState("allProduct")
  return (
    <div>
        <nav className=" p-5">ADMIN</nav>
      <div className=" flex ">
      <div className=" flex flex-col h-1/3 w-1/3 border rounded-lg gap-5"> 
      <span>sild bar</span>
      <button className=" border rounded-lg  hover:bg-slate-200"onClick={()=> setIsShow("allProduct")} >All Product</button>
      <button className=" border rounded-lg hover:bg-slate-200 hover:ring-1 ring-black " onClick={()=> setIsShow("order")}>Order</button>
      <button className=" border rounded-lg  hover:bg-slate-200" onClick={()=> setIsShow("createProduct")}>Create Product</button>
      </div>
      <div className=" h-1/3 w-1/3 border rounded-lg">
        <div>
          {isShow === "allProduct" ? <AdminAllProduct/>: ""}
          { isShow === "order"  ? <Order/>: ""}
          { isShow === "createProduct" ? <Products />: ""}
          
        </div>
        
      </div>
      </div>
    </div>
  )
}
