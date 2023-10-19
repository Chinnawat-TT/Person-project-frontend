import { useNavigate, useParams } from "react-router-dom";
import axios from "../../config/axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import SaleItem from "./SaleItem"

export default function SaleCardItem() {
  const { itemId } = useParams();
  const [show , setShow]=useState([])
  const [notification,setNotification]=useState(false)
  const Navigate = useNavigate()
  console.log(show)

  const addToCart = async (data) => {
    await axios.post(`/verifi/addtocart`, data).then(()=> toast("go to cart")).finally(()=> Navigate("/cart"));
  };

  useEffect(() => {
    axios
      .get(`/sale/men/item/${itemId}`)
      .then((res) => setShow(res.data))
      .catch((err) => console.log(err));
  }, []);
//   const{item ,subImage}=show
  console.log(show)

  return (
    <div className="  grid grid-cols-2">
        {show.map((el ,index)=>(
        <div key={index}>
        <SaleItem show={el} addToCart={addToCart}/>
        </div>
        ))}
    </div>
  );
}
