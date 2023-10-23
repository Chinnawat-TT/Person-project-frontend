import { useEffect, useState } from "react";
import axios from "../../config/axios";
import Table from "./Table";

export default function TableAllProduct() {
  const [data, setData] = useState([]);
  

  const deleteProduct = async(productId)=>{
    try {
     
      await axios.delete(`/admin/${productId}`)
      setData(data.filter( el => el.id !== productId))
    } catch (err) {
      console.log(err)
    }
  }

  const editDetailProduct = async (productId,body)=>{
    try {
      
      await axios.patch(`/admin/detail/${productId}`,body).then(res => setData(res.data)).catch( err => console.log(err))
      
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
  
  return (
    <div>

      <table>
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
          {data?.map( (el)=>(
          <tr >
                <Table key={el.id} productobj={el} deleteProduct={deleteProduct} editDetailProduct={editDetailProduct}/>

          </tr>
              ))}
        </tbody>
      </table>
      
    </div>
  );
}
