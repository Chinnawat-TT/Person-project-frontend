import { useEffect, useState } from "react";
import axios from "../../config/axios";

export default function TableAllProduct() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("/admin")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

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
          {data?.map( (el,index)=>(
                <div key={index} className=" w-full " >
                  
                  <td>{el.id}</td>
                  <td>{el.name}</td>
                  <td>{el.price}</td>
                  <td>{el.categories}</td>
                  <td>{el.type}</td>
                  <td>{el.description}</td>
                  <td><img className=" h-10 w-10" src={el.mainImage} alt="" /></td>
                  <button>
                  <span className="material-symbols-outlined">edit</span>
                  </button>
                  <button>

                  <span className="material-symbols-outlined">delete</span>
                  </button>

                  </div>
              ))}
          </tr>
        </tbody>
      </table>
      
    </div>
  );
}
