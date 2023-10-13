import { Link } from "react-router-dom";


export default function Products() {
  return (
    <div>
        Products
        <div className=" p-4  bg-blue-300 text-white">
        <Link to="/admin/addproduct">
         <span>+ add product</span>
        </Link>
        </div>
        </div>
  )
}
