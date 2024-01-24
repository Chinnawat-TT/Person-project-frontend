import { useEffect, useState } from "react";

import axios from "../../config/axios";
import { Link, useLocation } from "react-router-dom";
import Loading from "../../components/Loading";
import SaleCard from "../../components/SaleCard";

export default function WomenPage() {
  const [show, setShow] = useState([]);
  const [loading ,setLoading]=useState(false)
  const location =useLocation()
  useEffect(() => {
    setLoading(true)
    axios
      .get("/sale/women")
      .then((res) => setShow(res.data))
      .catch((err) => console.log(err))
      .finally(()=>setTimeout(() => {
        setLoading(false)
      }, 300))
  }, []);
  console.log(">>> location",location.pathname.split("/")[1])
  return (
    <>
    {loading && <Loading/>}
    <ol className=" px-10 pt-4 flex gap-2">
        <Link to={"/"}>
        <li className=" font-sans">หน้าหลัก YUEDMAi </li>
        </Link>
      </ol>
    <div className=" flex flex-col md:flex-row gap-4 p-4 w-full justify-center items-center ">
      {show.map((el, index) => (
        <Link to={`/women/saleitem/${el.id}`}>
        <div key={index}>
          <SaleCard show={el} />
        </div>
        </Link>
      ))}
    </div>
    </>
  );
}
