import { useEffect, useState } from "react";
import SaleCard from "./Salecard";
import axios from "../../config/axios";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";

export default function WomenPage() {
  const [show, setShow] = useState([]);
  const [loading ,setLoading]=useState(false)
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
  return (
    <>
    {false && true}
    {loading && <Loading/>}
    <div className=" flex flex-col md:flex-row gap-4 p-4 w-full justify-center items-center">
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
