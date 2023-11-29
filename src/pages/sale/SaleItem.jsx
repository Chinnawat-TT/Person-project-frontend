import { useState } from "react";
import { useAuth } from "../../hooks/use-Auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ImageCarousel from "../../components/ImageCarousel";
import ImageController from "../../components/ImageController";

export default function SaleItem({ show ,addToCart}) {
  const { authUser }= useAuth()
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState(0);
  
  const {Productsimage}=show
  console.log(">>>>>>>>>>>>>>>>",Productsimage)
  const objMainImage = {name :show.mainImage}
  const [size ,setSize]=useState("")
  
  
  
  const handleSubmitForm = (event)=>{
    if(authUser === null){
      toast.error("กรุณาสมัครสมาชิก")
      setTimeout(() => {
        navigate("/signup")
        
      }, 1500);
    }
    event.preventDefault();
    show.size = size
    addToCart(show)
  }

  const onNext = () =>
    setSelectedImage((cur) => (cur + 1) % Productsimage.length);
  const onPrev = () =>
    setSelectedImage(
      (cur) => (cur - 1 + Productsimage?.length) % Productsimage?.length
    );

  return (
    <div className=" flex flex-col gap-2 border-separate ">
      {/* <div className=" ">
        <div>
          <img src={show.mainImage} alt="" /> 
          </div>
        {Productsimage.map( (el, index)=>(
         <div key={index}>
           <div><img src={el.name} alt="" /></div>
         </div>
        ))}
      </div> */}
      <div className=" flex" >
      <div className="px-4">
        <div className="w-full p-2 relative flex justify-center">
          <img
            src={Productsimage[selectedImage].name} 
            alt="product-image"
            className="w-96  aspect-square object-cover"
          />
          <ImageController position="top-1/2 left-5" onClick={onNext}>
          <span className="material-symbols-outlined">arrow_back_ios</span>
          </ImageController>
          <ImageController position="top-1/2 right-5" onClick={onPrev}>
          <span class="material-symbols-outlined">arrow_forward_ios</span>
          </ImageController>
        </div>
        

        <ImageCarousel
          
          images={Productsimage}
          setSelectedImage={setSelectedImage}
        />
       
      </div>
      <span></span>
      <div className=" flex flex-col p-4 justify-between">
      <div className=" flex flex-col p-4 gap-4">
        <span className=" font-semibold">{show.name}</span>
        <span className=" font-semibold">price : {show.price}</span>
        <span className=" font-semibold">size : {size === "" ? <span className=" text-red-400">กรุณาเลือกไซส์</span> : size}</span>
        <div className=" flex gap-4">
          
          <span className={` cursor-pointer hover:ring-2  hover:text-white hover:bg-black p-4 w-16 flex justify-center items-center${ size === "S" ? "outline-2 outline-black text-white bg-black":""}`} onClick={()=>setSize("S")}>S</span>
          <span className={` cursor-pointer hover:ring-2  hover:text-white hover:bg-black p-4 w-16 flex justify-center items-center${ size === "M" ? "outline-2 outline-black text-white bg-black":""}`} onClick={()=>setSize("M")}>M</span>
          <span className={` cursor-pointer hover:ring-2  hover:text-white hover:bg-black p-4 w-16 flex justify-center items-center${ size === "L" ? "outline-2 outline-black text-white bg-black":""}`} onClick={()=>setSize("L")}>L</span>
          <span className={` cursor-pointer hover:ring-2  hover:text-white hover:bg-black p-4 w-16 flex justify-center items-center${ size === "XL" ? "outline-2 outline-black text-white bg-black":""}`} onClick={()=>setSize("XL")}>XL</span>
        </div>
       
      </div>
      <button className=" bg-red-500 p-5 hover:bg-red-400" onClick={handleSubmitForm} >  ADD TO CART </button>
      </div>
      </div>


      <div className=" border-t-2 p-4">
        <div className=" flex justify-between">
          <span className=" font-sans">Description</span>
          <span className=" font-thin">ProducutID : {show.id}</span>
        </div>
        <span className=" font-sans">
          {show.description}
        </span>
      </div>
    </div>
  );
}
