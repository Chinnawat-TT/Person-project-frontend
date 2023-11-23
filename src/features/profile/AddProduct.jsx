import { useNavigate } from "react-router-dom";
import axios from "../../config/axios";
import { useState } from "react";
import Loading from "../../components/Loading"
useNavigate
export default function AddProduct() {
  const [fileMainImage, setFileMainImage] = useState(null);
  const [fileSubImage, setFileSubImage] = useState([]);
  const [loading,setLoading]= useState(false)
  const navigate = useNavigate()
  const [input, setInput] = useState({
    name: "",
    categories: "",
    price: "",
    description: "",
    type: "",
  });
  const createProduct = async (data) => {
    await axios.post("/admin", data);
    
  };

  //   const handleChangeImage = (event) => {
  //     setFile({ ...file, [event.target.name]: event.target.files[0] });
  //   };

  const handleChangeInput = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData();

      for (let i = 0; i < fileSubImage.length; i++) {
        formData.append("subImage", fileSubImage[i]);
      }
      formData.append("mainImage", fileMainImage);
      formData.append("message", JSON.stringify(input));
      setLoading(true);
      await createProduct(formData);
    } catch (err) {
      console.log(err);
    } finally {
        setLoading(false)
        navigate('/admin')
    }
  };
  return (
    <form onSubmit={handleSubmitForm}>
        {loading && <Loading/>}
      <nav className=" p-4"> ADMIN - ADDPRODUCT </nav>
      <div className="  bg-red-100  flex flex-col gap-5 items-center justify-center">
        <span>Create product</span>
        <div className=" flex flex-col">
          <span>Product Name</span>
          <input
            type="text"
            placeholder="product name"
            name="name"
            value={input.name}
            onChange={handleChangeInput}
          />
        </div>
        <div className=" flex flex-col">
          <span>Price</span>
          <input
            type="text"
            placeholder="price"
            name="price"
            value={input.price}
            onChange={handleChangeInput}
          />
        </div>
        <div className=" flex flex-col">
          <span>Type</span>
          <select name="type" id="type-select" onChange={handleChangeInput}>
            <option value="">You have selected</option>
            <option value="TSHIRT">TSHIRT</option>
            <option value="JACKET">JACKET</option>
          </select>
        </div>
        <div className=" flex flex-col">
          <span>Categories</span>
          <select
            name="categories"
            id="categories-select"
            onChange={handleChangeInput}
          >
            <option value="">You have selected</option>
            <option value="MEN">MEN</option>
            <option value="WOMEN">WOMEN</option>
            <option value="KIDS">KIDS</option>
          </select>
        </div>
        <div className=" flex flex-col">
          <span>Description</span>
          <textarea
            id="description"
            name="description"
            value={input.description}
            onChange={handleChangeInput}
          ></textarea>
        </div>
        <div className=" flex flex-col">
          <span>Main image</span>
          <input
            type="file"
            name="mainImage"
            onChange={(event) => {
              if (event.target.files[0]) {
                setFileMainImage(event.target.files[0]);
              }
            }}
          />
        </div>
        <div className=" flex flex-col">
          <span>Sub image</span>
          <input
            type="file"
            multiple
            name="subImage"
            onChange={(event) => {
              if (event.target.files) {
                setFileSubImage(event.target.files);
              }
            }}
          />
        </div>
        <div className=" flex gap-5">
          <div className=" bg-green-300">
            <button>Create</button>
          </div>
          <div className=" bg-orange-300">
            <button>Cancel</button>
          </div>
        </div>
      </div>
    </form>
  );
}
