import { useNavigate } from "react-router-dom";
import axios from "../../config/axios";
import { useEffect, useRef, useState } from "react";
import Loading from "../../components/Loading"
useNavigate
export default function AddProduct() {
  const [fileMainImage, setFileMainImage] = useState([]);
  const [fileSubImage, setFileSubImage] = useState([]);
  const [mainImageURL, setMainImageURL] = useState([]);
  const [subImageURL, setSubImageURL] = useState([]);
  const [loading,setLoading]= useState(false)
  const fileMain = useRef();
  const fileSub = useRef();
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
 
  useEffect(()=>{
    if(fileMainImage.length < 1) return
    console.log("hello effect")
    const newMainImageUrl ={}
    newMainImageUrl.url = URL.createObjectURL(fileMainImage)
    setMainImageURL(newMainImageUrl)
    if(fileSubImage.length < 1) return
    
    const selectedFileArray = Array.from(fileSubImage)
    const imageArray = selectedFileArray.map( file =>{
      return URL.createObjectURL(file)
    })
    setSubImageURL(imageArray)
  },[fileMainImage,fileSubImage])

  console.log(mainImageURL)
  console.log(subImageURL)
  return (
    <>
      <nav className=" p-4"> ADMIN - ADDPRODUCT </nav>
    <form onSubmit={handleSubmitForm} className=" flex flex-col items-center h-[580px] gap-1">
        {loading && <Loading/>}
      <div className="flex flex-col gap-1 items-center justify-center border w-[800px] p-1">
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
        <div className=" flex h-52 gap-20 w-full">
        <div className=" flex flex-col w-48 ">
          <div className=" flex gap-2 ">

          <span>Main image</span>
          <span
                    className="material-symbols-outlined cursor-pointer"
                    onClick={() => fileMain.current.click()}
                  >
                    download
                  </span>
          </div>
          <input
            type="file"
            name="mainImage"
            className="hidden"
            ref={fileMain}
            onChange={(event) => {
              if (event.target.files[0]) {
                setFileMainImage(event.target.files[0]);
              }
            }}
          />
          {mainImageURL.url ? (<img src={mainImageURL.url } alt="" className=" w-36 h-36 "/>):("")}
        </div>
        <div className=" flex flex-col w-[500px] ">
          <div className=" flex gap-2 ">
          <span>Sub image</span>
          <span
                    className="material-symbols-outlined cursor-pointer"
                    onClick={() => fileSub.current.click()}
                  >
                    download
                  </span>
                  </div>
          <input
            type="file"
            multiple
            name="subImage"
            className="hidden"
            ref={fileSub}
            onChange={(event) => {
              if (event.target.files) {
                setFileSubImage(event.target.files);
              }
            }}
          />
          <div className=" flex overflow-auto">
          {subImageURL && subImageURL.map( (image,index) => {
            return (
              

                <img src={image} className=" w-36 h-36" key={index}/>
              
            )
          })}
          </div>
        </div>
        </div>
        
      </div>
      <div className=" flex gap-5">
          <div className=" border p-1 hover:border-black hover:bg-green-300">
            <button>Create</button>
          </div>
          <div className="  border p-1 hover:border-black hover:bg-red-300">
            <button>Cancel</button>
          </div>
        </div>
    </form>
    </>
  );
}
