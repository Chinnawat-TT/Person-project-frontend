import { useEffect, useState } from "react";
import axios from "../../config/axios";
import SaleCard from "./Salecard";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";

export default function KidsPage() {
  const [show, setShow] = useState([]);
  const [loading,setLoading]=useState(false)
  useEffect(() => {
    setLoading(true)
    axios
      .get("/sale/kids")
      .then((res) => setShow(res.data))
      .catch((err) => console.log(err))
      .finally(()=>setTimeout(() => {
        setLoading(false)
      }, 300))
  }, []);
  return (
    <>
    {loading && <Loading/>}
    <ol className=" px-10 pt-4">
        <Link to={"/"}>
        <span className=" font-sans">หน้าหลัก YUEDMAi / {}</span>
        </Link>
      </ol>
    <div className=" flex flex-col md:flex-row gap-4 p-4 w-full items-center justify-center">
      {show.map((el, index) => (
        <Link to={`/kids/saleitem/${el.id}`}>
        <div key={index}>
          <SaleCard show={el} />
        </div>
        </Link>
      ))}
    </div>
    </>
  );
}
