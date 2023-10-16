import { useEffect, useState } from "react";
import SaleCard from "./Salecard";
import axios from "../../config/axios";
import Loading from "../../components/Loading";

export default function MenPage() {
  const [show, setShow] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
      setLoading(true)
    axios
      .get("/sale/men/")
      .then((res) => setShow(res.data))
      .catch((err) => console.log(err))
      .finally(()=> setLoading(false));
  }, []);
  console.log(show);
  return (
    <div className=" flex flex-col md:flex-row gap-4 p-4 w-full">
      {loading && <Loading/>}
      {show.map((el, index) => (
        <div key={index}>
          <SaleCard show={el} />
        </div>
      ))}
    </div>
  );
}
