import { useEffect, useState } from "react";
import axios from "../../config/axios";
import Table from "../profile/Table";

export default function AllProduct() {
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

      
          {data?.map( (el)=>(
         
                <Table key={el.id} productobj={el} deleteProduct={deleteProduct} editDetailProduct={editDetailProduct}/>

          
              ))}
      
      
    </div>
  );
}
