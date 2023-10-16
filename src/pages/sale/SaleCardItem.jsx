import { useParams } from "react-router-dom";
import axios from "../../config/axios";
import { useEffect, useState } from "react";
import SaleItem from "./SaleItem"
export default function SaleCardItem() {
  const { itemId } = useParams();
  const [show , setShow]=useState([])

  console.log(show)
  useEffect(() => {
    axios
      .get(`/sale/men/item/${itemId}`)
      .then((res) => setShow(res.data))
      .catch((err) => console.log(err));
  }, []);
//   const{item ,subImage}=show
  console.log(show)

  return (
    <div className=" bg-red-100  grid grid-cols-2">
        {show.map((el ,index)=>(
        <div key={index}>
        <SaleItem show={el}/>
        </div>
        ))}
    </div>
  );
}
