import { Link } from "react-router-dom";

export default function AdminAllProduct() {
  return (
    <div>
        See all product
        <div className=" p-4  bg-blue-300 text-white">
        <Link to="/admin/allproduct">
         <span> See product </span>
        </Link>
        </div>
        </div>
  )
}
