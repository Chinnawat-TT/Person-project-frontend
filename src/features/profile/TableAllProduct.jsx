import { useEffect, useState } from "react";
import axios from "../../config/axios";
import Table from "./Table";

export default function TableAllProduct() {
  const [data, setData] = useState([]);

  const deleteProduct = async(productId)=>{
    try {
      console.log("clickdelete")
      await axios.delete(`/admin/${productId}`)
      setData(data.filter( el => el.id !== productId))
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    axios
      .get("/admin")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(data)
  const handleClickDelete =()=>{
    deleteProduct(el.id)
  }
  return (
    <div>

      <table className="table-auto border-collapse border-spacing-2">
        <thead>
          <tr >
            <th>Product ID</th>
            <th>Product name</th>
            <th>Price</th>
            <th>Categories</th>
            <th>Type</th>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          {data?.map( (el)=>(
                <Table key={el.id} productobj={el} deleteProduct={deleteProduct}/>
              ))}
          </tr>
        </tbody>
      </table>
      
    </div>
  );
}
