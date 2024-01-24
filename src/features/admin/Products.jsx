import { Link } from "react-router-dom";


export default function Products() {
  return (
    <div >
        Products
        <div className=" p-4 ">
        <Link to="/admin/addproduct">
         <span className=" border p-4 hover:shadow-md hover:font-bold">+ add product</span>
        </Link>
        </div>
        </div>
  )
}
