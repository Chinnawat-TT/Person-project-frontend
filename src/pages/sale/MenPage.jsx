import { useEffect, useState } from "react";

import axios from "../../config/axios";

import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import SaleCard from "../../components/SaleCard";

export default function MenPage() {
  const [show, setShow] = useState([]);
  const [loading,setIsLoading] =useState(false)
 
  useEffect(() => {
    console.log(".......")
    setIsLoading(true)
    axios
      .get("/sale/men/")
      .then((res) => setShow(res.data))
      .catch((err) => console.log(err))
      .finally(()=> setTimeout(() => {
        setIsLoading(false)
      }, 300)
      )
  }, []);
  console.log(show);
  
  return (
    <>
      {loading && <Loading/>}
      <ol className=" px-10 pt-4">
        <Link to={"/"}>
        <span className=" font-sans">หน้าหลัก YUEDMAi</span>
        </Link>
      </ol>
    <div className=" flex flex-col md:flex-row gap-4 p-4 w-full justify-center items-center">
      
      {show.map((el, index) => (
        <Link to={`/men/saleitem/${el.id}`}>
        <div key={index}>
          <SaleCard show={el} />
        </div>
        </Link>

      ))}
    </div>
    </>
  );
}
