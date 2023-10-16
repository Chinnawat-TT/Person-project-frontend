import { useEffect, useState } from "react";
import SaleCard from "./Salecard";
import axios from "../../config/axios";

import { Link } from "react-router-dom";

export default function MenPage() {
  const [show, setShow] = useState([]);
  
  useEffect(() => {
      
    axios
      .get("/sale/men/")
      .then((res) => setShow(res.data))
      .catch((err) => console.log(err))
      
  }, []);
  console.log(show);
  
  return (
    <div className=" flex flex-col md:flex-row gap-4 p-4 w-full justify-center items-center">
      
      {show.map((el, index) => (
        <Link to={`/men/saleitem/${el.id}`}>
        <div key={index}>
          <SaleCard show={el} />
        </div>
        </Link>

      ))}
    </div>
  );
}
